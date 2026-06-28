# core-graphics-kit

Purpose: renderer-agnostic visual descriptor contracts.

Owns: render descriptors, material descriptors, instance descriptors, lighting descriptors, VFX descriptors, LOD descriptors, quality profiles, visibility hints, and renderer adapter contracts.

Does not own: WebGL, DOM, Three.js, native renderer, or asset upload implementation.

Public API: `createCoreGraphicsKit(config?)` plus seed exports from `render-descriptor-kit.js`.

Proof required: descriptor smoke, adapter boundary smoke, no hidden renderer dependency, deterministic headless smoke.
