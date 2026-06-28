import { createCoreCapabilityKit } from "../core-capability-kit.js";

export function createCoreUIKit(config = {}) {
  return createCoreCapabilityKit({
    ...config,
    domain: "core-ui",
    apiName: config.apiName ?? "coreUI",
    purpose: "UI descriptors for HUDs, menus, prompts, notifications, panels, focus, selection, and accessibility.",
    owns: ["HUD descriptors", "menu descriptors", "prompt descriptors", "notifications", "focus state", "selection state"],
    doesNotOwn: ["DOM rendering", "React components", "native UI implementation"],
    metadata: { ...(config.metadata ?? {}), piecesFirst: true }
  });
}
