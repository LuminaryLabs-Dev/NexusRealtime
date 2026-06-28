import { createCoreCapabilityKit } from "../core-capability-kit.js";

export function createCoreAnimationKit(config = {}) {
  return createCoreCapabilityKit({
    ...config,
    domain: "core-animation",
    apiName: config.apiName ?? "coreAnimation",
    purpose: "Animation descriptors and state: clips, blends, poses, transitions, procedural hooks, and timeline events.",
    owns: ["clips", "blends", "poses", "transition rules", "timeline events"],
    doesNotOwn: ["renderer animation mixer", "asset loading"],
    metadata: { ...(config.metadata ?? {}), piecesFirst: true }
  });
}
