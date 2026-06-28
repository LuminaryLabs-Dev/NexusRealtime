import { createCoreCapabilityKit } from "../core-capability-kit.js";

export function createCorePlatformKit(config = {}) {
  return createCoreCapabilityKit({
    ...config,
    domain: "core-platform",
    apiName: config.apiName ?? "corePlatform",
    purpose: "Host capability detection and fallback mode selection.",
    owns: ["host capability descriptors", "device class", "permission descriptors", "fallback mode selection"],
    doesNotOwn: ["renderer implementation", "device-specific game logic"],
    metadata: { ...(config.metadata ?? {}), piecesFirst: true }
  });
}
