export function createInferenceResult(config = {}) {
  return Object.freeze({
    id: config.id ?? "inference-result",
    modelId: config.modelId ?? "mock-model",
    kind: config.kind ?? "mock",
    input: structuredClone(config.input ?? null),
    output: structuredClone(config.output ?? { label: "mock", score: 1 }),
    metadata: Object.freeze({ ...(config.metadata ?? {}) })
  });
}
