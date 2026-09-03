-- =============================================================================
-- Telecom Customer 360 — Unity Catalog bootstrap
-- Run order: 1 of 8
--
-- Creates the catalog and the six domain schemas the rest of the data model
-- lives in. Domain-oriented schemas (rather than one flat schema) mirror how
-- an enterprise telecom would apply Unity Catalog governance: each domain can
-- carry its own access grants, e.g. `network` (usage/CDR-derived data) is
-- typically more sensitive than `product` (catalog data), and `engagement`
-- (marketing/consent) is the schema a CDP integration should be scoped to.
--
-- Rename `telecom_c360` below to match the client's actual catalog naming
-- convention before running against a real workspace.
-- =============================================================================

CREATE CATALOG IF NOT EXISTS telecom_c360
  COMMENT 'Telecom Customer 360 demo data model — Adobe RTCDP Federated Audience Composition source';

USE CATALOG telecom_c360;

CREATE SCHEMA IF NOT EXISTS party
  COMMENT 'Party, customer, account, and identity-resolution tables — the CDP identity spine.';

CREATE SCHEMA IF NOT EXISTS product
  COMMENT 'Product catalog, subscriptions, devices, and service lines (MSISDN/SIM level).';

CREATE SCHEMA IF NOT EXISTS network
  COMMENT 'Usage, network quality, and outage/event facts derived from network/OSS systems.';

CREATE SCHEMA IF NOT EXISTS billing
  COMMENT 'Billing statements, line items, payments, and revenue facts.';

CREATE SCHEMA IF NOT EXISTS engagement
  COMMENT 'Marketing, digital engagement, consent, care, and loyalty — primary source for CDP audiences.';

CREATE SCHEMA IF NOT EXISTS analytics
  COMMENT 'Derived/ML scores (churn, propensity, CLV) served back into Customer 360.';
