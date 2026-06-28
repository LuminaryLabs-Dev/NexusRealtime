# core-data-kit

Purpose: durable state, snapshots, selectors, ledgers, serializable state, and migration helpers.

Owns: state contracts, snapshot/loadSnapshot/reset semantics, completion ledgers, idempotency ledgers, selectors, data validation.

Does not own: persistence targets, renderer descriptors, agent decisions.

Public API: `createCoreDataKit(config?)`.

Proof required: default config, custom config, snapshot/reset, serializable state, deterministic headless smoke.
