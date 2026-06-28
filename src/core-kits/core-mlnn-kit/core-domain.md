# core-mlnn-kit

Purpose: model and neural-network capability domain.

Owns: model registry, model descriptors, inference request/result descriptors, embedding descriptors, classification descriptors, perception descriptors, generation descriptors, deterministic mock model adapter, and backend adapter boundaries.

Does not own: agent goals, agent planning, action choice, or raw backend loading internals.

Public API: `createCoreMLNNKit(config?)`.

Boundary: MLNN sees, predicts, embeds, classifies, or generates descriptors. MLNN does not decide actions.

Proof required: mock inference smoke, model registry smoke, deterministic descriptor smoke, core-agent composition smoke.
