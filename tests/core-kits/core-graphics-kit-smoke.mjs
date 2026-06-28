import assert from "node:assert/strict";
import { createRealtimeGame } from "../../src/index.js";
import {
  createCoreGraphicsKit,
  createRenderDescriptor,
  createInstanceDescriptor,
  createMaterialDescriptor,
  createLightingDescriptor,
  createVFXDescriptor,
  createQualityProfile
} from "../../src/core-kits/core-graphics-kit/index.js";

assert.equal(createRenderDescriptor({ id: "cube", kind: "mesh" }).kind, "mesh", "render descriptor stores kind");
assert.equal(createInstanceDescriptor({ count: 3 }).count, 3, "instance descriptor stores count");
assert.equal(createMaterialDescriptor({ id: "mat", color: "#fff" }).color, "#fff", "material descriptor stores color");
assert.equal(createLightingDescriptor({ intensity: 2 }).intensity, 2, "lighting descriptor stores intensity");
assert.equal(createVFXDescriptor({ kind: "spark" }).kind, "spark", "vfx descriptor stores kind");
assert.equal(createQualityProfile({ renderScale: 0.5 }).renderScale, 0.5, "quality profile stores render scale");

const engine = createRealtimeGame({ kits: [createCoreGraphicsKit()] });
engine.n.coreGraphics.setDescriptor("objects", "cube", createRenderDescriptor({ id: "cube" }));
assert.equal(engine.n.coreGraphics.getDescriptors("objects").cube.id, "cube", "core graphics descriptor update works");

console.log("core-graphics-kit piece smoke ok");
