-- =============================================================================
-- Telecom Customer 360 — Engagement, Marketing & Care domain
-- Run order: 6 of 8
--
-- This is the schema an Adobe RTCDP Federated Audience Composition source
-- connection should be scoped to (alongside party.identity_map and whichever
-- product/billing tables a given audience needs to join). consent_preference
-- in particular should gate every marketing composition — see README.
-- =============================================================================

USE CATALOG telecom_c360;

-- -----------------------------------------------------------------------------
-- campaign: marketing campaign dimension.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS engagement.campaign (
  campaign_id       STRING NOT NULL COMMENT 'Surrogate key (UUID).',
  campaign_name       STRING NOT NULL,
  campaign_type        STRING NOT NULL COMMENT 'RETENTION | UPSELL | WINBACK | ACQUISITION | PROMOTIONAL',
  channel               STRING NOT NULL COMMENT 'EMAIL | SMS | PUSH | DIRECT_MAIL',
  start_date             DATE,
  end_date               DATE,
  owner_team             STRING COMMENT 'e.g. Lifecycle Marketing, Retention, Growth.',
  CONSTRAINT pk_campaign PRIMARY KEY (campaign_id)
)
USING DELTA
COMMENT 'Marketing campaign dimension.';

-- -----------------------------------------------------------------------------
-- marketing_interaction: campaign touches at the party level — sent,
-- delivered, opened, clicked, converted, unsubscribed. This is the table
-- that demonstrates the FAC email use case most directly (e.g. "engaged with
-- the last retention campaign but did not convert").
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS engagement.marketing_interaction (
  interaction_id       STRING NOT NULL COMMENT 'Surrogate key (UUID).',
  party_id               STRING NOT NULL COMMENT 'FK -> party.party.party_id',
  campaign_id             STRING NOT NULL COMMENT 'FK -> engagement.campaign.campaign_id',
  channel                 STRING NOT NULL COMMENT 'EMAIL | SMS | PUSH',
  interaction_type        STRING NOT NULL COMMENT 'SENT | DELIVERED | OPEN | CLICK | CONVERT | UNSUBSCRIBE | BOUNCE',
  interaction_ts           TIMESTAMP NOT NULL,
  email_address             STRING COMMENT 'Denormalized for convenience; authoritative value lives in party.identity_map.',
  CONSTRAINT pk_marketing_interaction PRIMARY KEY (interaction_id)
)
USING DELTA
COMMENT 'Campaign touch events per party (sent/open/click/convert/unsubscribe). Primary evidence table for email-engagement audience logic.';

-- -----------------------------------------------------------------------------
-- digital_engagement_event: app/web/IVR/retail interaction events, not tied
-- to a specific campaign.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS engagement.digital_engagement_event (
  event_id       STRING NOT NULL COMMENT 'Surrogate key (UUID).',
  party_id         STRING NOT NULL COMMENT 'FK -> party.party.party_id',
  channel           STRING NOT NULL COMMENT 'MOBILE_APP | WEBSITE | IVR | RETAIL_STORE',
  event_type         STRING NOT NULL COMMENT 'LOGIN | BILL_VIEW | PLAN_CHANGE_VIEW | UPGRADE_CLICK | CHAT_INITIATED',
  event_ts             TIMESTAMP NOT NULL,
  session_id            STRING,
  CONSTRAINT pk_digital_engagement_event PRIMARY KEY (event_id)
)
USING DELTA
COMMENT 'Digital/self-service interaction events (app, web, IVR, retail) not tied to a marketing campaign.';

-- -----------------------------------------------------------------------------
-- consent_preference: channel-level marketing consent, with the regulatory
-- basis recorded. Every audience composition that activates to email/SMS
-- should join through this table and filter to an active opt-in.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS engagement.consent_preference (
  consent_id         STRING NOT NULL COMMENT 'Surrogate key (UUID).',
  party_id             STRING NOT NULL COMMENT 'FK -> party.party.party_id',
  channel               STRING NOT NULL COMMENT 'EMAIL | SMS | PUSH | TELEMARKETING',
  consent_status         STRING NOT NULL COMMENT 'OPT_IN | OPT_OUT | UNKNOWN',
  consent_source          STRING COMMENT 'WEB_FORM | IVR | RETAIL | APP | IMPORTED',
  regulation                STRING COMMENT 'TCPA | CAN_SPAM | GDPR | CCPA',
  consent_ts                TIMESTAMP NOT NULL,
  expiration_ts              TIMESTAMP COMMENT 'NULL if the consent does not expire.',
  CONSTRAINT pk_consent_preference PRIMARY KEY (consent_id)
)
USING DELTA
COMMENT 'Channel-level marketing consent record. Gating table: every activation-bound audience composition should join through this and filter to OPT_IN.';

-- -----------------------------------------------------------------------------
-- support_ticket: customer care interactions.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS engagement.support_ticket (
  ticket_id       STRING NOT NULL COMMENT 'Surrogate key (UUID).',
  account_id        STRING NOT NULL COMMENT 'FK -> party.account.account_id',
  party_id           STRING COMMENT 'FK -> party.party.party_id, the individual who raised the ticket.',
  channel             STRING NOT NULL COMMENT 'CALL_CENTER | CHAT | APP | RETAIL | SOCIAL',
  category             STRING NOT NULL COMMENT 'BILLING | TECHNICAL | NETWORK | DEVICE | RETENTION',
  priority              STRING NOT NULL COMMENT 'LOW | MEDIUM | HIGH | URGENT',
  status                 STRING NOT NULL COMMENT 'OPEN | IN_PROGRESS | RESOLVED | ESCALATED',
  opened_ts               TIMESTAMP NOT NULL,
  resolved_ts               TIMESTAMP,
  csat_score                 INT COMMENT '1-5 post-resolution satisfaction score.',
  CONSTRAINT pk_support_ticket PRIMARY KEY (ticket_id)
)
USING DELTA
COMMENT 'Customer care cases across call center, chat, app, retail, and social channels.';

-- -----------------------------------------------------------------------------
-- loyalty_account: rewards/loyalty program enrollment and status.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS engagement.loyalty_account (
  loyalty_id             STRING NOT NULL COMMENT 'Surrogate key (UUID).',
  party_id                 STRING NOT NULL COMMENT 'FK -> party.party.party_id',
  tier                       STRING NOT NULL COMMENT 'BRONZE | SILVER | GOLD | PLATINUM',
  points_balance              INT NOT NULL DEFAULT 0,
  enrollment_date               DATE NOT NULL,
  last_redemption_date            DATE,
  CONSTRAINT pk_loyalty_account PRIMARY KEY (loyalty_id)
)
USING DELTA
COMMENT 'Loyalty/rewards program enrollment and status per party.';
