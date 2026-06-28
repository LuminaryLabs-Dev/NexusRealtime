import { createCoreCapabilityKit } from "../core-capability-kit.js";

export function createCoreCameraKit(config = {}) {
  return createCoreCapabilityKit({
    ...config,
    domain: "core-camera",
    apiName: config.apiName ?? "coreCamera",
    purpose: "Camera targets, follow modes, shake, FOV policy, camera volumes, occlusion policy, and XR/head boundaries.",
    owns: ["camera targets", "follow modes", "shake descriptors", "FOV policy", "camera volumes", "occlusion policy"],
    doesNotOwn: ["renderer camera object", "raw XR session"],
    metadata: { ...(config.metadata ?? {}), piecesFirst: true }
  });
}
