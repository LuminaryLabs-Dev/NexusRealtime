import { createCoreCapabilityKit } from "../core-capability-kit.js";

export { TelemetryState, createTelemetryKit } from "../../telemetry-kit.js";

export function createCoreDiagnosticsKit(config = {}) {
  return createCoreCapabilityKit({
    ...config,
    domain: "core-diagnostics",
    apiName: config.apiName ?? "coreDiagnostics",
    purpose: "Telemetry, runtime snapshots, replay fixtures, determinism guards, performance counters, kit health, and promotion evidence.",
    owns: ["telemetry", "runtime snapshots", "replay fixtures", "determinism guards", "performance counters", "kit health reports"],
    doesNotOwn: ["external observability vendor integration"],
    metadata: { ...(config.metadata ?? {}), piecesFirst: true }
  });
}
