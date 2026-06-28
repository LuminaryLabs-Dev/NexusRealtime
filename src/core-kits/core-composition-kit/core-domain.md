# core-composition-kit

Purpose: visible kit graph, manifests, dependencies, requires/provides maps, composition plans, promotion metadata, and kit health.

Owns: kit manifest descriptors, dependency graph snapshots, composition plans, domain graph snapshots, promotion metadata, and kit health state.

Does not own: low-level install mechanics or game-specific bundles.

Public API: `createCoreCompositionKit(config?)`.

Proof required: manifest smoke, dependency graph smoke, composition plan smoke, deterministic headless smoke.
