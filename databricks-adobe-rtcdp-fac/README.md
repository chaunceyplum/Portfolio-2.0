# Databricks → Adobe RTCDP Federated Audience Composition — Client Demo

Demo build-out for showing a client how to compose Adobe Real-Time CDP
audiences directly from account/customer data living in Databricks, using
Federated Audience Composition (FAC) — no ingestion pipeline, no data
duplication into AEP.

## Contents

- **[`data-model/`](./data-model)** — the Databricks Unity Catalog data
  model: a 24-table enterprise-telecom Customer 360 schema (party/identity,
  product/service, network/usage, billing/revenue, engagement/marketing,
  analytics), plus an ERD and a worked example of the join logic an FAC
  composition would express. **Status: built.**

## Planned next phases (not yet built)

1. **Sample data generation** — synthetic rows for all 24 tables at demo
   scale (a few hundred accounts), consistent across FK relationships.
2. **Delta Share setup** — expose the `engagement`, `party`, `product`, and
   `billing` schemas via Databricks Delta Sharing for Adobe to connect to.
3. **AEP-side FAC configuration** — source connection (`deltashare`
   connector), federated data model field mapping, and the composition
   canvas itself, built against a dedicated sandbox.
4. **Activation** — wire the resulting audience to an email channel
   (Adobe Journey Optimizer, Campaign, Marketo, or SFMC — TBD based on the
   client's stack) and demo an end-to-end send.
5. **Client walkthrough materials** — a short deck/one-pager summarizing the
   architecture and governance story (read-only credentials, consent
   enforced in the join, no PII duplicated into AEP).

See the conversation history / `data-model/README.md` for the full
architecture plan and reference to prior FAC work already present in the
Adobe demo org (`tap-demo-ucp` sandbox) that this build follows the pattern
of.
