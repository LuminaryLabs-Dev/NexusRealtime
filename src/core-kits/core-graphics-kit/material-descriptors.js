export function createMaterialDescriptor(config = {}) {
  return Object.freeze({
    id: config.id ?? "material",
    kind: config.kind ?? "standard",
    color: config.color ?? null,
    textureId: config.textureId ?? null,
    roughness: config.roughness ?? null,
    metalness: config.metalness ?? null,
    quality: config.quality ?? "default",
    metadata: Object.freeze({ ...(config.metadata ?? {}) })
  });
}
