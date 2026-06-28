import assert from "node:assert/strict";
import { createRealtimeGame } from "../../src/index.js";
import {
  createCoreMLNNKit,
  createModelRegistry,
  createModelDescriptor,
  createInferenceRequest,
  createInferenceResult,
  createMockModelAdapter
} from "../../src/core-kits/core-mlnn-kit/index.js";

const registry = createModelRegistry();
registry.register(createModelDescriptor({ id: "mock", kind: "classifier" }));
assert.equal(registry.get("mock").kind, "classifier", "model registry stores descriptor");

const request = createInferenceRequest({ modelId: "mock", input: { value: 1 } });
assert.equal(request.modelId, "mock", "inference request stores model id");
assert.equal(createInferenceResult({ output: { label: "ok" } }).output.label, "ok", "inference result stores output");
assert.equal(createMockModelAdapter().infer(request).output.label, "mock", "mock adapter returns deterministic output");

const engine = createRealtimeGame({ kits: [createCoreMLNNKit({ models: [{ id: "mock", kind: "mock" }] })] });
const result = engine.n.coreMLNN.infer({ modelId: "mock", input: { text: "hi" } });
assert.equal(result.output.label, "mock", "core MLNN installs and infers");

console.log("core-mlnn-kit piece smoke ok");
