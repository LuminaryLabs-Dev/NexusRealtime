import { createInferenceResult } from "./inference-result.js";

export function createMockModelAdapter(config = {}) {
  return Object.freeze({
    id: config.id ?? "mock-model-adapter",
    kind: "mock",
    infer(request = {}) {
      return createInferenceResult({
        id: request.id ?? `mock:${request.modelId ?? "model"}`,
        modelId: request.modelId ?? config.modelId ?? "mock-model",
        kind: request.kind ?? "mock",
        input: request.input ?? null,
        output: request.mockOutput ?? config.output ?? { label: "mock", score: 1 },
        metadata: request.metadata ?? {}
      });
    }
  });
}
