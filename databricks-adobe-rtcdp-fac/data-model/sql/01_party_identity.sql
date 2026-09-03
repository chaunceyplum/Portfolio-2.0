-- =============================================================================
-- Telecom Customer 360 — Party & Identity domain
-- Run order: 2 of 8
--
-- This is the identity spine of the model. `identity_map` in particular is
-- the table an Adobe RTCDP Federated Audience Composition join keys off of:
-- it normalizes every identifier a downstream system might send (hashed
-- email, MSISDN, loyalty ID, ECID, CRM account ID, cookie ID) against a
-- single internal party_id, so an audience composed in AEP can resolve
-- back to warehouse-side Party/Customer/Account records without needing
-- every source system to agree on one identifier up front.
-- =============================================================================

USE CATALOG telecom_c360;

-- -----------------------------------------------------------------------------
-- party: universal record for a person or organization. Every human or
-- business the telecom has a relationship with — subscriber, authorized user,
-- SMB owner, enterprise procurement contact — is a party first.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS party.party (
  party_id             STRING NOT NULL COMMENT 'Surrogate key (UUID) for a person or organization.',
  party_type           STRING NOT NULL COMMENT 'INDIVIDUAL | ORGANIZATION',
  first_name           STRING COMMENT 'Populated when party_type = INDIVIDUAL.',
  last_name            STRING COMMENT 'Populated when party_type = INDIVIDUAL.',
  organization_name    STRING COMMENT 'Populated when party_type = ORGANIZATION.',
  date_of_birth        DATE COMMENT 'Individuals only; used for age-gated offers/compliance.',
  gender               STRING,
  preferred_language   STRING COMMENT 'BCP-47 language tag, e.g. en-US, es-US.',
  source_system        STRING COMMENT 'System of origin, e.g. CRM, SELF_SERVE_PORTAL, RETAIL_POS.',
  created_ts           TIMESTAMP NOT NULL,
  updated_ts           TIMESTAMP NOT NULL,
  CONSTRAINT pk_party PRIMARY KEY (party_id)
)
USING DELTA
COMMENT 'Universal party record — one row per person or organization the telecom has a relationship with.';

-- -----------------------------------------------------------------------------
-- customer: the commercial relationship layer over a party. A party becomes
-- a customer once they hold at least one account.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS party.customer (
  customer_id          STRING NOT NULL COMMENT 'Surrogate key (UUID) for the customer relationship.',
  party_id             STRING NOT NULL COMMENT 'FK -> party.party.party_id',
  customer_type        STRING NOT NULL COMMENT 'CONSUMER | SMB | ENTERPRISE',
  customer_segment     STRING COMMENT 'e.g. PREPAID_CONSUMER, POSTPAID_CONSUMER, SMB_STANDARD, ENTERPRISE_STRATEGIC',
  customer_since_date  DATE NOT NULL,
  customer_status      STRING NOT NULL COMMENT 'ACTIVE | SUSPENDED | CHURNED',
  churn_date           DATE COMMENT 'Populated when customer_status = CHURNED.',
  churn_reason_code    STRING,
  created_ts           TIMESTAMP NOT NULL,
  updated_ts           TIMESTAMP NOT NULL,
  CONSTRAINT pk_customer PRIMARY KEY (customer_id)
)
USING DELTA
COMMENT 'Customer relationship record — one row per party that holds (or held) at least one billing account.';

-- -----------------------------------------------------------------------------
-- account: the billing/contractual unit. A consumer customer typically has
-- one account; an SMB/enterprise customer can have many (per location,
-- cost center, or subsidiary).
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS party.account (
  account_id           STRING NOT NULL COMMENT 'Surrogate key (UUID) for the billing account.',
  customer_id          STRING NOT NULL COMMENT 'FK -> party.customer.customer_id',
  account_type         STRING NOT NULL COMMENT 'RETAIL | WHOLESALE | GOVERNMENT',
  account_status       STRING NOT NULL COMMENT 'ACTIVE | PAST_DUE | SUSPENDED | CLOSED',
  billing_cycle_day    INT COMMENT 'Day of month the billing cycle closes (1-28).',
  payment_method       STRING COMMENT 'CREDIT_CARD | BANK_TRANSFER | INVOICE | DIGITAL_WALLET',
  autopay_enabled      BOOLEAN NOT NULL DEFAULT FALSE,
  credit_score_band    STRING COMMENT 'Internal risk banding, e.g. A/B/C/D, used for deposit/credit-limit decisions.',
  opened_date          DATE NOT NULL,
  closed_date          DATE,
  created_ts           TIMESTAMP NOT NULL,
  updated_ts           TIMESTAMP NOT NULL,
  CONSTRAINT pk_account PRIMARY KEY (account_id)
)
USING DELTA
COMMENT 'Billing account — the contractual/financial unit that subscriptions and invoices roll up to.';

-- -----------------------------------------------------------------------------
-- contact: named individuals authorized on an account (billing contact,
-- technical contact, authorized user on a family/business plan).
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS party.contact (
  contact_id           STRING NOT NULL COMMENT 'Surrogate key (UUID) for the contact.',
  account_id           STRING NOT NULL COMMENT 'FK -> party.account.account_id',
  party_id             STRING COMMENT 'FK -> party.party.party_id, when the contact is also a known party.',
  contact_role         STRING NOT NULL COMMENT 'PRIMARY | AUTHORIZED_USER | BILLING | TECHNICAL | PROCUREMENT',
  email                STRING,
  phone_number         STRING,
  title                STRING COMMENT 'B2B only, e.g. IT Director, Procurement Manager.',
  created_ts           TIMESTAMP NOT NULL,
  updated_ts           TIMESTAMP NOT NULL,
  CONSTRAINT pk_contact PRIMARY KEY (contact_id)
)
USING DELTA
COMMENT 'Individuals named on an account — billing/technical/authorized-user/procurement contacts.';

-- -----------------------------------------------------------------------------
-- address: service, billing, and shipping addresses. Kept generic (party- or
-- account-scoped) so it covers both consumer service addresses and B2B
-- multi-site billing addresses.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS party.address (
  address_id           STRING NOT NULL COMMENT 'Surrogate key (UUID) for the address.',
  party_id             STRING COMMENT 'FK -> party.party.party_id, when address belongs to a party.',
  account_id           STRING COMMENT 'FK -> party.account.account_id, when address belongs to an account.',
  address_type         STRING NOT NULL COMMENT 'SERVICE | BILLING | SHIPPING',
  address_line1        STRING NOT NULL,
  address_line2        STRING,
  city                 STRING NOT NULL,
  state_province       STRING NOT NULL,
  postal_code          STRING NOT NULL,
  country              STRING NOT NULL,
  latitude             DECIMAL(9,6),
  longitude            DECIMAL(9,6),
  is_primary           BOOLEAN NOT NULL DEFAULT FALSE,
  effective_date       DATE NOT NULL,
  expiration_date      DATE,
  CONSTRAINT pk_address PRIMARY KEY (address_id)
)
USING DELTA
COMMENT 'Service, billing, and shipping addresses for parties and accounts.';

-- -----------------------------------------------------------------------------
-- identity_map: the CDP identity-resolution bridge. Every external
-- identifier a marketing/CDP system might carry (hashed email, MSISDN,
-- loyalty ID, Adobe ECID, CRM account ID, cookie/device ID) is normalized
-- here against party_id. This is the table the RTCDP Federated Audience
-- Composition join keys off of.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS party.identity_map (
  identity_id          STRING NOT NULL COMMENT 'Surrogate key (UUID) for the identity mapping row.',
  party_id             STRING NOT NULL COMMENT 'FK -> party.party.party_id',
  identity_namespace   STRING NOT NULL COMMENT 'EMAIL_SHA256 | PHONE_E164 | MSISDN | LOYALTY_ID | ECID | CRM_ACCOUNT_ID | COOKIE_ID',
  identity_value       STRING NOT NULL COMMENT 'Value in the given namespace. Email/phone are stored hashed — see README.',
  is_primary           BOOLEAN NOT NULL DEFAULT FALSE COMMENT 'Preferred identifier within its namespace for this party.',
  identity_status      STRING NOT NULL COMMENT 'ACTIVE | MERGED | DEPRECATED',
  merged_into_party_id STRING COMMENT 'Populated when identity_status = MERGED (identity resolution / dedup).',
  created_ts           TIMESTAMP NOT NULL,
  updated_ts           TIMESTAMP NOT NULL,
  CONSTRAINT pk_identity_map PRIMARY KEY (identity_id)
)
USING DELTA
COMMENT 'Identity-resolution bridge: maps every external identifier namespace to an internal party_id. Primary join surface for Adobe RTCDP Federated Audience Composition.';
