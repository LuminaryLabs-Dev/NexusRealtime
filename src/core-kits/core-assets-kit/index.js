import { createCoreCapabilityKit } from "../core-capability-kit.js";

export function createCoreAssetsKit(config = {}) {
  return createCoreCapabilityKit({
    ...config,
    domain: "core-assets",
    apiName: config.apiName ?? "coreAssets",
    purpose: "Asset manifests, asset ids, readiness state, references, fallback assets, and load descriptors.",
    owns: ["asset manifests", "asset ids", "asset references", "readiness descriptors", "fallback assets"],
    doesNotOwn: ["browser loader implementation", "renderer-specific texture upload"],
    metadata: { ...(config.metadata ?? {}), piecesFirst: true }
  });
}
