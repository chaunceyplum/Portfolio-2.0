-- =============================================================================
-- Telecom Customer 360 — Analytics domain
-- Run order: 7 of 8
--
-- Derived/ML scores served back into Customer 360. In production these
-- tables are typically populated by a scheduled Databricks ML job (or MLflow
-- model serving) rather than by an operational source system.
-- =============================================================================

USE CATALOG telecom_c360;

-- -----------------------------------------------------------------------------
-- churn_risk_score: churn probability, upsell propensity, and CLV estimate
-- per customer. This is a natural FAC composition input for a retention
-- email use case ("top-decile churn risk, high CLV, opted in, not contacted
-- in the last 7 days").
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS analytics.churn_risk_score (
  score_id            STRING NOT NULL COMMENT 'Surrogate key (UUID).',
  customer_id           STRING NOT NULL COMMENT 'FK -> party.customer.customer_id',
  score_date             DATE NOT NULL,
  churn_probability       DECIMAL(5,4) NOT NULL COMMENT 'Fraction 0-1.',
  upsell_propensity        DECIMAL(5,4) COMMENT 'Fraction 0-1.',
  clv_estimate               DECIMAL(12,2) COMMENT 'Estimated customer lifetime value.',
  next_best_action             STRING COMMENT 'e.g. RETENTION_OFFER, DEVICE_UPGRADE_OFFER, PLAN_UPSELL.',
  model_version                 STRING NOT NULL COMMENT 'MLflow model version/run ID that produced this score.',
  CONSTRAINT pk_churn_risk_score PRIMARY KEY (score_id)
)
USING DELTA
COMMENT 'ML-derived churn probability, upsell propensity, and CLV estimate per customer, refreshed on a scoring cadence.';
