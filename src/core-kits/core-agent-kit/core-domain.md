# core-agent-kit

Purpose: agent observation, planning-cycle, action proposal, execution ledger, telemetry, and replay evidence domain.

Owns: agent identity, goals, observations, memory handles, decision cycles, action proposals, tool/action registry, execution ledger, agent telemetry, and replay fixtures.

Does not own: raw model backend loading, ML inference internals, or unrestricted tool execution.

Public API: `createCoreAgentKit(config?)`.

Boundary: Agent observes, decides, proposes, and acts through policy. Agent does not own model backend loading.

Proof required: rule-agent smoke, action proposal smoke, policy composition smoke, MLNN composition smoke, deterministic replay smoke.
