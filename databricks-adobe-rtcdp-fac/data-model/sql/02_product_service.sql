-- =============================================================================
-- Telecom Customer 360 — Product & Service domain
-- Run order: 3 of 8
--
-- Product catalog, what a customer is subscribed to, the physical devices
-- involved, and the individual telecom lines (MSISDN/SIM) those
-- subscriptions activate.
-- =============================================================================

USE CATALOG telecom_c360;

-- -----------------------------------------------------------------------------
-- product: the sellable catalog — mobile plans, broadband tiers, TV/streaming
-- bundles, IoT plans, device protection.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS product.product (
  product_id                STRING NOT NULL COMMENT 'Surrogate key (UUID) for the catalog product.',
  product_name               STRING NOT NULL,
  product_category           STRING NOT NULL COMMENT 'MOBILE_PLAN | BROADBAND | TV | IOT | DEVICE_INSURANCE | STREAMING_BUNDLE',
  product_subcategory        STRING COMMENT 'e.g. UNLIMITED_5G, FIBER_1GIG, SD_WAN_BUSINESS.',
  monthly_recurring_charge   DECIMAL(10,2) NOT NULL,
  data_allowance_gb          DECIMAL(8,2) COMMENT 'NULL implies unlimited.',
  contract_term_months       INT COMMENT '0 = month-to-month / no-contract.',
  is_active                  BOOLEAN NOT NULL DEFAULT TRUE,
  launch_date                DATE,
  retire_date                DATE,
  CONSTRAINT pk_product PRIMARY KEY (product_id)
)
USING DELTA
COMMENT 'Sellable product catalog: mobile plans, broadband, TV, IoT, and value-added services.';

-- -----------------------------------------------------------------------------
-- service_subscription: an account's subscription to a catalog product.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS product.service_subscription (
  subscription_id       STRING NOT NULL COMMENT 'Surrogate key (UUID) for the subscription.',
  account_id             STRING NOT NULL COMMENT 'FK -> party.account.account_id',
  product_id             STRING NOT NULL COMMENT 'FK -> product.product.product_id',
  subscription_status    STRING NOT NULL COMMENT 'ACTIVE | SUSPENDED | CANCELLED | PENDING_ACTIVATION',
  activation_date        DATE,
  deactivation_date      DATE,
  contract_start_date    DATE,
  contract_end_date      DATE,
  is_autorenew           BOOLEAN NOT NULL DEFAULT TRUE,
  cancellation_reason    STRING COMMENT 'e.g. PRICE, COVERAGE, COMPETITOR_SWITCH, MOVED, DECEASED.',
  created_ts             TIMESTAMP NOT NULL,
  updated_ts             TIMESTAMP NOT NULL,
  CONSTRAINT pk_service_subscription PRIMARY KEY (subscription_id)
)
USING DELTA
COMMENT 'An account''s subscription to a specific catalog product (a mobile line plan, a broadband tier, etc.).';

-- -----------------------------------------------------------------------------
-- device: physical device inventory — handsets, tablets, routers, IoT
-- sensors, wearables.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS product.device (
  device_id           STRING NOT NULL COMMENT 'Surrogate key (UUID) for the device.',
  imei                 STRING COMMENT 'International Mobile Equipment Identity.',
  device_make          STRING NOT NULL,
  device_model         STRING NOT NULL,
  device_os            STRING COMMENT 'e.g. iOS 18, Android 15.',
  device_category      STRING NOT NULL COMMENT 'SMARTPHONE | TABLET | ROUTER | IOT_SENSOR | WEARABLE',
  purchase_date         DATE,
  purchase_price        DECIMAL(10,2),
  financed_flag         BOOLEAN NOT NULL DEFAULT FALSE COMMENT 'TRUE if on a device installment plan (see billing.billing_line_item).',
  insurance_flag        BOOLEAN NOT NULL DEFAULT FALSE,
  CONSTRAINT pk_device PRIMARY KEY (device_id)
)
USING DELTA
COMMENT 'Physical device inventory associated with service lines.';

-- -----------------------------------------------------------------------------
-- service_line: the individual telecom line — MSISDN/IMSI/SIM level detail
-- — activated under a subscription.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS product.service_line (
  line_id           STRING NOT NULL COMMENT 'Surrogate key (UUID) for the service line.',
  subscription_id    STRING NOT NULL COMMENT 'FK -> product.service_subscription.subscription_id',
  device_id          STRING COMMENT 'FK -> product.device.device_id, current device on this line.',
  msisdn             STRING COMMENT 'Mobile Station International Subscriber Directory Number (phone number).',
  imsi               STRING COMMENT 'International Mobile Subscriber Identity.',
  sim_iccid          STRING COMMENT 'SIM card serial number.',
  line_type          STRING NOT NULL COMMENT 'VOICE | DATA_ONLY | IOT',
  line_status        STRING NOT NULL COMMENT 'ACTIVE | SUSPENDED | PORTED_OUT | DISCONNECTED',
  port_in_date       DATE COMMENT 'Populated if the MSISDN was ported in from another carrier.',
  port_out_date      DATE COMMENT 'Populated if the MSISDN was ported out to another carrier.',
  created_ts         TIMESTAMP NOT NULL,
  updated_ts         TIMESTAMP NOT NULL,
  CONSTRAINT pk_service_line PRIMARY KEY (line_id)
)
USING DELTA
COMMENT 'Individual telecom line (MSISDN/IMSI/SIM) activated under a subscription; grain for usage and network-quality facts.';
