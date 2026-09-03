-- =============================================================================
-- Telecom Customer 360 — Foreign key constraints
-- Run order: 8 of 8 (run only after every table in 01-06 has been created)
--
-- Unity Catalog foreign keys are informational (not enforced at write time)
-- but are read by Databricks' query optimizer and by BI/catalog tooling to
-- understand join relationships — worth declaring even though they don't
-- police the data. Declared last, in one file, so table-creation order in
-- 01-06 never has to worry about forward references.
-- =============================================================================

USE CATALOG telecom_c360;

-- party ------------------------------------------------------------------
ALTER TABLE party.customer          ADD CONSTRAINT fk_customer_party            FOREIGN KEY (party_id)        REFERENCES party.party(party_id);
ALTER TABLE party.account           ADD CONSTRAINT fk_account_customer          FOREIGN KEY (customer_id)     REFERENCES party.customer(customer_id);
ALTER TABLE party.contact           ADD CONSTRAINT fk_contact_account           FOREIGN KEY (account_id)      REFERENCES party.account(account_id);
ALTER TABLE party.contact           ADD CONSTRAINT fk_contact_party             FOREIGN KEY (party_id)        REFERENCES party.party(party_id);
ALTER TABLE party.address           ADD CONSTRAINT fk_address_party             FOREIGN KEY (party_id)        REFERENCES party.party(party_id);
ALTER TABLE party.address           ADD CONSTRAINT fk_address_account           FOREIGN KEY (account_id)      REFERENCES party.account(account_id);
ALTER TABLE party.identity_map      ADD CONSTRAINT fk_identity_map_party        FOREIGN KEY (party_id)        REFERENCES party.party(party_id);

-- product ------------------------------------------------------------------
ALTER TABLE product.service_subscription ADD CONSTRAINT fk_subscription_account FOREIGN KEY (account_id)     REFERENCES party.account(account_id);
ALTER TABLE product.service_subscription ADD CONSTRAINT fk_subscription_product FOREIGN KEY (product_id)     REFERENCES product.product(product_id);
ALTER TABLE product.service_line         ADD CONSTRAINT fk_line_subscription    FOREIGN KEY (subscription_id) REFERENCES product.service_subscription(subscription_id);
ALTER TABLE product.service_line         ADD CONSTRAINT fk_line_device          FOREIGN KEY (device_id)       REFERENCES product.device(device_id);

-- network ------------------------------------------------------------------
ALTER TABLE network.usage_daily_summary   ADD CONSTRAINT fk_usage_line          FOREIGN KEY (line_id)         REFERENCES product.service_line(line_id);
ALTER TABLE network.network_quality_score ADD CONSTRAINT fk_netquality_line     FOREIGN KEY (line_id)         REFERENCES product.service_line(line_id);

-- billing ------------------------------------------------------------------
ALTER TABLE billing.billing_statement  ADD CONSTRAINT fk_statement_account      FOREIGN KEY (account_id)      REFERENCES party.account(account_id);
ALTER TABLE billing.billing_line_item  ADD CONSTRAINT fk_lineitem_statement     FOREIGN KEY (statement_id)    REFERENCES billing.billing_statement(statement_id);
ALTER TABLE billing.billing_line_item  ADD CONSTRAINT fk_lineitem_subscription  FOREIGN KEY (subscription_id) REFERENCES product.service_subscription(subscription_id);
ALTER TABLE billing.payment            ADD CONSTRAINT fk_payment_account        FOREIGN KEY (account_id)      REFERENCES party.account(account_id);
ALTER TABLE billing.payment            ADD CONSTRAINT fk_payment_statement      FOREIGN KEY (statement_id)    REFERENCES billing.billing_statement(statement_id);
ALTER TABLE billing.revenue_fact       ADD CONSTRAINT fk_revenue_account        FOREIGN KEY (account_id)      REFERENCES party.account(account_id);

-- engagement ------------------------------------------------------------------
ALTER TABLE engagement.marketing_interaction     ADD CONSTRAINT fk_mktginteraction_party    FOREIGN KEY (party_id)    REFERENCES party.party(party_id);
ALTER TABLE engagement.marketing_interaction     ADD CONSTRAINT fk_mktginteraction_campaign FOREIGN KEY (campaign_id) REFERENCES engagement.campaign(campaign_id);
ALTER TABLE engagement.digital_engagement_event  ADD CONSTRAINT fk_digitalevent_party        FOREIGN KEY (party_id)    REFERENCES party.party(party_id);
ALTER TABLE engagement.consent_preference        ADD CONSTRAINT fk_consent_party              FOREIGN KEY (party_id)    REFERENCES party.party(party_id);
ALTER TABLE engagement.support_ticket            ADD CONSTRAINT fk_ticket_account              FOREIGN KEY (account_id)  REFERENCES party.account(account_id);
ALTER TABLE engagement.support_ticket            ADD CONSTRAINT fk_ticket_party                FOREIGN KEY (party_id)    REFERENCES party.party(party_id);
ALTER TABLE engagement.loyalty_account           ADD CONSTRAINT fk_loyalty_party                FOREIGN KEY (party_id)    REFERENCES party.party(party_id);

-- analytics ------------------------------------------------------------------
ALTER TABLE analytics.churn_risk_score ADD CONSTRAINT fk_churnscore_customer    FOREIGN KEY (customer_id)     REFERENCES party.customer(customer_id);
