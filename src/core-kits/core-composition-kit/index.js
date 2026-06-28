import { createCoreCapabilityKit } from "../core-capability-kit.js";

export function createCoreCompositionKit(config = {}) {
  return createCoreCapabilityKit({
    ...config,
    domain: "core-composition",
    apiName: config.apiName ?? "coreComposition",
    purpose: "Visible kit graph state: manifests, dependencies, requires/provides maps, composition plans, promotion metadata, and health state.",
    owns: ["kit manifests", "dependency graph", "requires/provides map", "composition plans", "domain graph snapshots", "kit health state"],
    doesNotOwn: ["low-level kit install mechanics", "game-specific kit bundles"],
    metadata: { ...(config.metadata ?? {}), piecesFirst: true }
  });
}
