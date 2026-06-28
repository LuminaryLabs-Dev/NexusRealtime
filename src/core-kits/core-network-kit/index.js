import { createCoreCapabilityKit } from "../core-capability-kit.js";

export function createCoreNetworkKit(config = {}) {
  return createCoreCapabilityKit({
    ...config,
    domain: "core-network",
    apiName: config.apiName ?? "coreNetwork",
    purpose: "Session, peer, message envelope, event sync, state sync, authority, latency, reconnect, and collaboration contracts.",
    owns: ["sessions", "peers", "message envelopes", "sync policies", "authority descriptors", "reconnect state"],
    doesNotOwn: ["transport provider SDK", "backend service implementation"],
    metadata: { ...(config.metadata ?? {}), piecesFirst: true }
  });
}
