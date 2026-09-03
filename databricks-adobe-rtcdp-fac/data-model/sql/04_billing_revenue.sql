-- =============================================================================
-- Telecom Customer 360 — Billing & Revenue domain
-- Run order: 5 of 8
--
-- Invoices, line-item detail, payments, and a monthly revenue/ARPU fact.
-- These tables are what typically drive "value tier" and "past due" audience
-- logic (e.g. an FAC composition targeting high-ARPU customers with an
-- upsell email, or excluding past-due accounts from a promotional send).
-- =============================================================================

USE CATALOG telecom_c360;

-- -----------------------------------------------------------------------------
-- billing_statement: one row per invoice/statement issued to an account.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS billing.billing_statement (
  statement_id            STRING NOT NULL COMMENT 'Surrogate key (UUID) for the statement.',
  account_id                STRING NOT NULL COMMENT 'FK -> party.account.account_id',
  billing_period_start      DATE NOT NULL,
  billing_period_end        DATE NOT NULL,
  statement_date             DATE NOT NULL,
  due_date                   DATE NOT NULL,
  total_amount_due           DECIMAL(12,2) NOT NULL,
  amount_paid                DECIMAL(12,2) NOT NULL DEFAULT 0,
  statement_status           STRING NOT NULL COMMENT 'OPEN | PAID | PAST_DUE | WRITTEN_OFF',
  CONSTRAINT pk_billing_statement PRIMARY KEY (statement_id)
)
USING DELTA
COMMENT 'One row per invoice/statement issued to a billing account.';

-- -----------------------------------------------------------------------------
-- billing_line_item: itemized charges/credits on a statement.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS billing.billing_line_item (
  line_item_id           STRING NOT NULL COMMENT 'Surrogate key (UUID).',
  statement_id             STRING NOT NULL COMMENT 'FK -> billing.billing_statement.statement_id',
  subscription_id          STRING COMMENT 'FK -> product.service_subscription.subscription_id, when the charge is subscription-specific.',
  charge_type               STRING NOT NULL COMMENT 'RECURRING | USAGE_OVERAGE | DEVICE_INSTALLMENT | ONE_TIME_FEE | TAX | CREDIT',
  description                STRING,
  amount                     DECIMAL(10,2) NOT NULL COMMENT 'Negative for credits.',
  CONSTRAINT pk_billing_line_item PRIMARY KEY (line_item_id)
)
USING DELTA
COMMENT 'Itemized charge/credit lines that make up a billing statement.';

-- -----------------------------------------------------------------------------
-- payment: payment transactions against an account/statement.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS billing.payment (
  payment_id           STRING NOT NULL COMMENT 'Surrogate key (UUID).',
  account_id             STRING NOT NULL COMMENT 'FK -> party.account.account_id',
  statement_id           STRING COMMENT 'FK -> billing.billing_statement.statement_id',
  payment_date            TIMESTAMP NOT NULL,
  payment_amount          DECIMAL(12,2) NOT NULL,
  payment_method          STRING NOT NULL COMMENT 'CREDIT_CARD | BANK_TRANSFER | AUTOPAY | CASH | DIGITAL_WALLET',
  payment_status          STRING NOT NULL COMMENT 'COMPLETED | FAILED | REFUNDED | PENDING',
  CONSTRAINT pk_payment PRIMARY KEY (payment_id)
)
USING DELTA
COMMENT 'Payment transactions applied to accounts/statements.';

-- -----------------------------------------------------------------------------
-- revenue_fact: monthly revenue/ARPU aggregate per account. Partitioned by
-- revenue_month. This is the table a "high-value customer" or "ARPU decline"
-- audience filter would join against.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS billing.revenue_fact (
  revenue_month        DATE NOT NULL COMMENT 'First-of-month date; partition column.',
  account_id             STRING NOT NULL COMMENT 'FK -> party.account.account_id',
  mrc_revenue             DECIMAL(12,2) NOT NULL DEFAULT 0 COMMENT 'Monthly recurring charge revenue.',
  usage_revenue            DECIMAL(12,2) NOT NULL DEFAULT 0 COMMENT 'Overage/usage-based revenue.',
  one_time_revenue          DECIMAL(12,2) NOT NULL DEFAULT 0,
  total_revenue              DECIMAL(12,2) NOT NULL DEFAULT 0,
  arpu                        DECIMAL(10,2) COMMENT 'Average revenue per user for the account this month.',
  CONSTRAINT pk_revenue_fact PRIMARY KEY (revenue_month, account_id)
)
USING DELTA
PARTITIONED BY (revenue_month)
COMMENT 'Monthly revenue/ARPU aggregate per account.';
