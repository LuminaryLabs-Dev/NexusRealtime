import { createCoreCapabilityKit } from "../core-capability-kit.js";

export function createCoreSpatialKit(config = {}) {
  return createCoreCapabilityKit({
    ...config,
    domain: "core-spatial",
    apiName: config.apiName ?? "coreSpatial",
    purpose: "Transforms, bounds, zones, coordinate spaces, distance checks, and spatial query descriptors.",
    owns: ["transforms", "bounds", "zones", "coordinate spaces", "distance descriptors", "ray/volume query descriptors"],
    doesNotOwn: ["scene graph identity", "physics resolution"],
    metadata: { ...(config.metadata ?? {}), piecesFirst: true }
  });
}
