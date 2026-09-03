-- =============================================================================
-- Telecom Customer 360 — Network & Usage domain
-- Run order: 4 of 8
--
-- Usage and network-experience facts, at the grain telecoms actually operate
-- on (per line, per day). usage_daily_summary is intentionally a
-- pre-aggregated daily fact rather than raw CDRs (call detail records) —
-- raw CDR volume is not something you'd federate live into a CDP composition;
-- the daily summary is what a marketing audience (e.g. "high data users",
-- "roaming this month") actually filters on.
-- =============================================================================

USE CATALOG telecom_c360;

-- -----------------------------------------------------------------------------
-- usage_daily_summary: daily aggregated voice/SMS/data usage per line.
-- Partitioned by usage_date — this is the highest-volume table in the model.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS network.usage_daily_summary (
  usage_date          DATE NOT NULL COMMENT 'Partition column.',
  line_id              STRING NOT NULL COMMENT 'FK -> product.service_line.line_id',
  voice_minutes_used   DECIMAL(10,2) NOT NULL DEFAULT 0,
  sms_count            INT NOT NULL DEFAULT 0,
  data_mb_used         DECIMAL(12,2) NOT NULL DEFAULT 0,
  roaming_data_mb      DECIMAL(12,2) NOT NULL DEFAULT 0,
  roaming_flag         BOOLEAN NOT NULL DEFAULT FALSE,
  overage_charge       DECIMAL(10,2) NOT NULL DEFAULT 0,
  network_type         STRING COMMENT 'Predominant network type for the day: 4G | 5G | WIFI_CALLING.',
  CONSTRAINT pk_usage_daily_summary PRIMARY KEY (usage_date, line_id)
)
USING DELTA
PARTITIONED BY (usage_date)
COMMENT 'Daily aggregated voice/SMS/data usage per service line. Highest-volume table; source for usage-based audience segmentation (e.g. high data users, roaming this month).';

-- -----------------------------------------------------------------------------
-- network_event: outages, degradations, and planned maintenance by cell
-- site/region — used to correlate care contacts and churn risk with network
-- experience.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS network.network_event (
  event_id                      STRING NOT NULL COMMENT 'Surrogate key (UUID) for the network event.',
  cell_site_id                   STRING NOT NULL,
  event_type                     STRING NOT NULL COMMENT 'OUTAGE | DEGRADATION | MAINTENANCE',
  severity                       STRING NOT NULL COMMENT 'LOW | MEDIUM | HIGH | CRITICAL',
  start_ts                       TIMESTAMP NOT NULL,
  end_ts                         TIMESTAMP,
  affected_region                STRING NOT NULL COMMENT 'e.g. metro/DMA name.',
  estimated_customers_impacted   INT,
  CONSTRAINT pk_network_event PRIMARY KEY (event_id)
)
USING DELTA
COMMENT 'Network outage, degradation, and maintenance events by cell site/region.';

-- -----------------------------------------------------------------------------
-- network_quality_score: rolled-up network experience per line, typically
-- computed daily/weekly from OSS telemetry.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS network.network_quality_score (
  score_id                       STRING NOT NULL COMMENT 'Surrogate key (UUID).',
  line_id                         STRING NOT NULL COMMENT 'FK -> product.service_line.line_id',
  score_date                      DATE NOT NULL,
  avg_latency_ms                  DECIMAL(8,2),
  dropped_call_rate               DECIMAL(5,4) COMMENT 'Fraction 0-1.',
  avg_signal_strength_dbm         DECIMAL(6,2),
  network_experience_score        DECIMAL(5,2) COMMENT '0-100 composite score.',
  CONSTRAINT pk_network_quality_score PRIMARY KEY (score_id)
)
USING DELTA
COMMENT 'Rolled-up per-line network experience score derived from OSS telemetry (latency, dropped calls, signal strength).';
