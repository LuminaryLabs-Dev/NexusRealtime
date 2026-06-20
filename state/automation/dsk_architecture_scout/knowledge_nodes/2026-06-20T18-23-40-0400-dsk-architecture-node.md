# Knowledge Nodes: dsk_architecture_scout 2026-06-20T18-23-40-0400

## Root Lesson
- id: dsk-telemetry-command-evidence-context-root-2026-06-20-1823
- statement: DSK remains release-aligned and smoke-green, but telemetry selected-value snapshots, telemetry path selectors, service command metadata, and submitted input frames now join the DSK hardening queue as a separate Telemetry Command Evidence Ownership row.
- why it matters: Proof history, operations commands, transport arrivals, and input frames can look replay-safe while retaining caller-owned objects or live runtime references. Runtime failure-boundary remains tranche 1, procedural/navigation ownership remains separate generated-world inventory, and module-source proof remains separate distribution work.

## Child Nodes
- id: dsk-release-aligned-still-context-2026-06-20-1823
  parent: dsk-telemetry-command-evidence-context-root-2026-06-20-1823
  lesson: Core still matches the preflight-resolved latest release branch and passes the existing smoke suite.
  evidence: `npm run automation:preflight` resolved `latestReleaseBranch: 0.0.2`; `HEAD` and `origin/0.0.2` both resolved to `96a0c16340c50832cdb5c4c81101b87b3f0c6fa0`; ahead/behind was `0 0`; `npm test` passed 8 smoke tests.
  look further: Keep resolving latest release branch every run and treat old packet commit hashes as context only.
- id: dsk-runtime-failure-boundary-first-2026-06-20-1823
  parent: dsk-telemetry-command-evidence-context-root-2026-06-20-1823
  lesson: Namespace safety, install transaction semantics, dependency parity, scheduler/world mutation isolation, procedural/navigation ownership, telemetry/command evidence ownership, and metadata truth remain tranche 1 hardening inventory.
  evidence: Focused probe returned inherited `__proto__` API marker with no own key, retained failed API-collision DSK metadata plus false same-object reinstall success, direct install of missing `runtime:missing`, duplicate binding overwrite, telemetry live selected/path values, RequestQueue/TransportRoute caller-owned metadata, and InputIntent live returned state.
  look further: Write fixtures for reserved keys, null-prototype or own-key policy, rollback/preflight, dependency parity, failed-tick cleanup/diagnostics, scheduler/world mutation, procedural/navigation ownership, telemetry/command ownership, event queue isolation, and reset/snapshot/async metadata truth.
- id: dsk-telemetry-command-evidence-core-2026-06-20-1823
  parent: dsk-telemetry-command-evidence-context-root-2026-06-20-1823
  lesson: Telemetry Command Evidence Ownership is core validation-surface inventory for existing telemetry, operations, transport, and input APIs, not a new gameplay implementation request.
  evidence: Deep bug node `2026-06-20T17:54:14-04:00` reproduces telemetry selected-value/path aliasing, RequestQueue/TransportRoute metadata aliasing, and InputIntent metadata/live-state aliasing; domain idea node `2026-06-20T18-00-21-0400` maps it to Telemetry Command Evidence Ownership; source evidence includes `src/telemetry-kit.js:6-72`, `src/request-queue-kit.js:13-147`, `src/transport-route-kit.js:44-113`, and `src/input-intent-kit.js:13-64`.
  look further: Add telemetry/command ownership fixtures in a non-scout core-validation lane before treating telemetry, operations receipts, transport arrivals, or input frames as immutable proof.
- id: dsk-procedural-navigation-ownership-still-separate-2026-06-20-1823
  parent: dsk-telemetry-command-evidence-context-root-2026-06-20-1823
  lesson: Procedural/navigation command and snapshot ownership remains a separate generated-world proof row.
  evidence: Prior DSK node `2026-06-20T17-38-41-0400` keeps `requestPath()` endpoint aliasing, navigation/procedural live snapshots, and `regenerate()` return-state mutation distinct from telemetry and service command evidence.
  look further: Preserve navigation/procedural fixtures for generated-world proof while adding telemetry/command fixtures for service proof and replay evidence.
- id: dsk-scheduler-world-mutation-still-lower-2026-06-20-1823
  parent: dsk-telemetry-command-evidence-context-root-2026-06-20-1823
  lesson: Active scheduler mutation, phase topology mutation, `runSystem()` membership, and low-level event payload isolation remain lower-level hardening rows that telemetry/command evidence does not replace.
  evidence: Prior DSK node `2026-06-20T06-23-50-0400` keeps scheduler/world mutation isolation in tranche 1; current evidence targets public telemetry and command APIs.
  look further: Decide scheduler/world defer/reject/immediate and event payload policy before trusting higher-level command/proof rows.
- id: dsk-query-read-model-still-later-2026-06-20-1823
  parent: dsk-telemetry-command-evidence-context-root-2026-06-20-1823
  lesson: Public query helper contracts, engine read-method snapshots, nested metadata/hazard isolation, and stored query proof snapshots remain distinct later validation inventory.
  evidence: Prior DSK node `2026-06-20T05-24-33-0400` keeps query read-model isolation live; current evidence targets telemetry proof capture and command submission boundaries.
  look further: Add exported `query*`, engine read-method, nested metadata/hazard, and `lastQuery`/`lastCollision` fixtures after tranche 1 starts.
- id: dsk-module-source-regression-separate-2026-06-20-1823
  parent: dsk-telemetry-command-evidence-context-root-2026-06-20-1823
  lesson: Public/local/fetched DSK proof remains a module-source strategy blocker, not telemetry/command evidence ownership.
  evidence: Ecosystem state node `2026-06-20T18-11-35-0400` and ecosystem proof node `2026-06-20T06-40-01-0400` keep ProtoKits package resolution, Experiments targeted proof, public `Booting...`, npm 404, aggregate-vs-targeted proof, and package-version policy separate from hardening rows.
  look further: Let ecosystem/proof lanes choose one package/workspace/CDN/same-origin/build-step import-map model.
- id: dsk-core-boundary-preserved-2026-06-20-1823
  parent: dsk-telemetry-command-evidence-context-root-2026-06-20-1823
  lesson: Telemetry/command evidence rows belong to core validation for existing primitives; new reusable gameplay kit work still belongs in ProtoKits and playable proof in Experiments.
  evidence: `docs/how-to-protokit.md:7-15`, `docs/how-to-protokit.md:53-68`, `docs/domain_ideas.md:1257-1286`, and `docs/kits_ideas.md:1220-1255` keep the ownership boundary explicit.
  look further: Harden telemetry/command invariants in core validation while keeping new reusable implementation and proof routing outside core.

## Related Nodes
- source: `state/automation/dsk_architecture_scout/knowledge_nodes/2026-06-20T17-38-41-0400-dsk-architecture-node.md`
- relationship: supersedes
- reason: Preserves runtime failure-boundary, scheduler/world mutation, and procedural/navigation ownership while adding telemetry/command evidence ownership as the newest command/proof row.
- source: `state/automation/deep_bug_report_scout/knowledge_nodes/2026-06-20T17-54-14-0400-deep-bug-node.md`
- relationship: extends
- reason: Adds telemetry selected-value snapshots, telemetry path selectors, RequestQueue/TransportRoute command metadata, and InputIntent frame ownership as DSK promotion-adjacent validation inventory.
- source: `state/automation/domain_kit_idea_expander/knowledge_nodes/2026-06-20T18-00-21-0400-domain-kit-idea-node.md`
- relationship: confirms
- reason: Maps the newest deep-bug evidence to Telemetry Command Evidence Ownership instead of duplicating query read-model, procedural/navigation, scheduler/world, or module-source families.
- source: `state/automation/ecosystem_state_scout/knowledge_nodes/2026-06-20T18-11-35-0400-ecosystem-state-node.md`
- relationship: constrains
- reason: Keeps public/local/fetched module-source proof blocker separate from telemetry/command hardening.
- source: `state/automation/ecosystem_proof_scout/knowledge_nodes/2026-06-20T06-40-01-0400-ecosystem-proof-node.md`
- relationship: constrains
- reason: Separates local, fetched-ref, targeted, browser, npm, package-version, hardening, and proof claims.

## Next Search Branches
- branch: runtime-failure-boundary-fixtures
  files or folders: `src/domain-service-kit.js`, `src/runtime-kit.js`, `src/game-kit-composer.js`, `src/engine.js`, `src/ecs.js`, `tests/domain-service-kit-smoke.mjs`
  question: What is the smallest non-scout executable fixture set for namespace policy, install rollback, dependency parity, failed-tick lifetime, scheduler/world mutation isolation, event queue isolation, procedural/navigation ownership, telemetry/command ownership, and metadata truth?
- branch: telemetry-proof-snapshot-isolation
  files or folders: `src/telemetry-kit.js`, telemetry proof fixtures
  question: Should Telemetry clone selected values on capture, on read, or both, and should history entries be frozen?
- branch: service-command-payload-ownership
  files or folders: `src/request-queue-kit.js`, `src/transport-route-kit.js`, service command fixtures
  question: Which service commands should clone submitted metadata and return immutable summaries versus explicit mutable handles?
- branch: input-frame-ownership
  files or folders: `src/input-intent-kit.js`, input/replay fixtures
  question: Should input submissions clone/freeze metadata and emitted payloads at submission time?
- branch: procedural-navigation-ownership
  files or folders: `src/pathfinding-kit.js`, `src/procedural-kit.js`, procedural/navigation ownership fixtures
  question: Which generated-world command/read rows should stay separate from telemetry/command evidence ownership?
- branch: module-source-proof-boundary
  files or folders: ecosystem proof/state packets, sibling ProtoKits/Experiments proof paths, public CDN/raw URLs
  question: Which proof claims are distribution/module-source issues rather than runtime, scheduler/world, procedural/navigation, telemetry/command, composition, identity, content-boundary, or query-read-model hardening?

## Not Claimed
- This node does not fix bugs, add tests, edit source, edit public docs, promote ProtoKits, publish npm metadata, validate sibling fetched refs, fix public proof routes, prove runtime failure-boundary readiness, prove scheduler/world mutation readiness, prove procedural/navigation ownership readiness, prove telemetry/command evidence ownership readiness, prove query-read-model readiness, prove content-boundary/objective readiness, prove runtime identity/lifecycle readiness, prove composition-proof ownership readiness, prove proof-signal integrity readiness, or prove broad DSK promotion readiness.
