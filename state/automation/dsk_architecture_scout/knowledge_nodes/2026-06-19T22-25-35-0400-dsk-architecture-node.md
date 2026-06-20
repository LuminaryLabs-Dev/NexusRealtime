# Knowledge Nodes: dsk_architecture_scout 2026-06-19T22-25-35-0400

## Root Lesson
- id: dsk-proof-signal-integrity-tranche-root-2026-06-19-2225
- statement: DSK remains release-aligned and smoke-green, and the newest ARExperience, WebXR hit-test, negative-time, and finite-scale findings add a proof-signal integrity tranche without replacing the ordered runtime failure-boundary fixture queue.
- why it matters: Runtime and browser proof surfaces can overcount completion, throw through device-helper setup, publish backward time, or store non-finite spatial geometry while existing smoke tests still pass; those risks affect evidence quality but do not supersede base DSK install/runtime hardening.

## Child Nodes
- id: dsk-release-aligned-still-context-2026-06-19-2225
  parent: dsk-proof-signal-integrity-tranche-root-2026-06-19-2225
  lesson: Core still matches the preflight-resolved latest release branch and passes the existing smoke suite.
  evidence: `npm run automation:preflight` resolved `latestReleaseBranch: 0.0.2`; `HEAD` and `origin/0.0.2` both resolved to `96a0c16340c50832cdb5c4c81101b87b3f0c6fa0`; ahead/behind was `0 0`; `npm test` passed 8 smoke tests.
  look further: Keep resolving latest release branch every run and treat old packet commit hashes as context only.
- id: dsk-runtime-failure-boundary-first-2026-06-19-2225
  parent: dsk-proof-signal-integrity-tranche-root-2026-06-19-2225
  lesson: Namespace safety, install transaction semantics, dependency parity, scheduler failed-tick lifetime, and metadata truth remain tranche 1.
  evidence: Current probes returned inherited `__proto__` API marker with no own key, retained failed API-collision DSK metadata plus false same-object reinstall success, direct install of missing `runtime:missing`, and failed-tick event replay with the recovery tick; source evidence remains `src/domain-service-kit.js:143-161`, `src/runtime-kit.js:135-215`, `src/game-kit-composer.js:49-76`, and `src/engine.js:168-287`.
  look further: Write fixtures for reserved keys, null-prototype or own-key policy, rollback/preflight, dependency parity, failed-tick cleanup/diagnostics, and reset/snapshot/async metadata truth.
- id: dsk-lifecycle-parity-second-2026-06-19-2225
  parent: dsk-proof-signal-integrity-tranche-root-2026-06-19-2225
  lesson: Lifecycle parity rows remain tranche 2 because they are core validation-surface bugs but not DSK install-boundary bugs.
  evidence: Prior DSK and neighboring nodes carry held-input receipts, terrain query/chunk parity, partial-start cleanup, and stopped-session state as later rows.
  look further: Add held-input receipt transition, terrain query/chunk parity, partial-start cleanup, and stopped-session state fixtures after tranche 1 starts.
- id: dsk-query-command-semantics-third-2026-06-19-2225
  parent: dsk-proof-signal-integrity-tranche-root-2026-06-19-2225
  lesson: Query/command semantics stay as tranche 3 and should not be folded into runtime install hardening or public proof.
  evidence: Prior deep bug and DSK nodes carry inactive completed LandmarkGuidance receipts, repeated EnvironmentalAffordance query receipts, missing activation state corruption, and RouteField live marker mutation.
  look further: Add terminal receipt, query-versus-transition, rejected-command state, and query snapshot isolation fixtures after runtime failure-boundary and lifecycle parity categories are explicit.
- id: dsk-experience-edge-fourth-2026-06-19-2225
  parent: dsk-proof-signal-integrity-tranche-root-2026-06-19-2225
  lesson: Experience-edge bugs remain downstream proof inventory after runtime, lifecycle, and query/command semantics fixtures are underway.
  evidence: Prior DSK and domain/deep bug nodes carry recovery receipt, launch fallback, quality profile, and content dataset rows.
  look further: Bundle recovery receipts, launch fallback, quality profiles, and content dataset contracts as a downstream proof tranche.
- id: dsk-read-model-orchestration-fifth-2026-06-19-2225
  parent: dsk-proof-signal-integrity-tranche-root-2026-06-19-2225
  lesson: Registry descriptors, engine surface snapshots, and SequenceNode sibling receipt semantics remain a separate read-model/orchestration isolation tranche.
  evidence: DSK node `2026-06-19T19-24-37-0400` found shader/material registry live nested descriptors, resource/event surface live payload snapshots, SequenceNode race sibling cleanup gaps, and SequenceNode `any` receipt overcount.
  look further: Add registry clone/freeze, surface snapshot isolation, race cleanup, and any receipt-policy fixtures after base runtime boundary work starts.
- id: dsk-compatibility-content-safety-sixth-2026-06-19-2225
  parent: dsk-proof-signal-integrity-tranche-root-2026-06-19-2225
  lesson: Legacy sequence replay/reset, legacy `AnyChild` cleanup, legacy sequence owning-kit lookup, and AR default text-safety remain a later compatibility/content-safety tranche.
  evidence: DSK node `2026-06-19T20-24-13-0400` found completed legacy root restart left child state `Unloaded`, legacy `AnyChild` completed the parent while a loser stayed `Running`, and default AR rendering inserted authored text through `innerHTML`.
  look further: Add root restart descendant reset/replay, `AnyChild` loser cleanup, owning-kit lookup, and AR text-versus-trusted-HTML fixtures after base runtime/read-model work starts.
- id: dsk-ar-spatial-readmodel-seventh-2026-06-19-2225
  parent: dsk-proof-signal-integrity-tranche-root-2026-06-19-2225
  lesson: AR launch preconditions, explicit mode fallback policy, launch-state isolation, and SpatialRoom getter isolation stay as tranche 7.
  evidence: DSK node `2026-06-19T21-25-07-0400` found plain-engine AR launch start throws on missing `engine.ar`, `runtime.getState().support` mutates live `ARSupportState`, explicit unknown or unsupported preferred modes return fallback preview, and SpatialRoom read getters mutate live building/anchor state.
  look further: Add missing-ARKit diagnostics, strict/permissive fallback labels, cloned/frozen launch state, render/update callback snapshots, and SpatialRoom getter isolation fixtures after base hardening work starts.
- id: dsk-proof-signal-integrity-eighth-2026-06-19-2225
  parent: dsk-proof-signal-integrity-tranche-root-2026-06-19-2225
  lesson: ARExperience terminal receipts, WebXR hit-test rejection policy, monotonic normal tick time, and finite greybox/spatial scale should join the hardening queue as a dedicated proof-signal integrity tranche.
  evidence: Current probe found ARExperience final completion repeated across ticks and manual `complete()` emitted duplicate payloads, `createHitTestSource()` threw `hit-test denied`, `engine.tick(1)` then `tick(-2)` left `clock.elapsed:-1`, and `createGreyboxBuilding({ scale:"huge" })` stored `NaN` through SpatialRoom; source evidence includes `src/ar-experience-kit.js:112-149`, `src/ar-session.js:61-75`, `src/engine.js:168-287`, `src/greybox-building-kit.js:26-67`, and `src/spatial-room-kit.js:46-58`.
  look further: Add terminal receipt event-count, hit-test rejection, negative normal tick, SequenceNode/surface propagation, and finite spatial-scale fixtures after base hardening work starts.
- id: dsk-proof-readiness-separate-layer-2026-06-19-2225
  parent: dsk-proof-signal-integrity-tranche-root-2026-06-19-2225
  lesson: Proof-readiness queueing, proof claim taxonomy, module-source gates, aggregate/targeted parity, release evidence checklists, and npm/package-version policy are separate claim-management tools.
  evidence: Ecosystem state node `2026-06-19T22-10-08-0400` and ecosystem proof node `2026-06-19T21-41-45-0400` keep local proof, fetched-ref proof, public browser proof, npm metadata, package-version policy, runtime hardening, lifecycle parity, query/command semantics, experience-edge proof, read-model/orchestration proof, compatibility/content-safety proof, AR/spatial rows, and proof-signal integrity separate.
  look further: Use proof-readiness taxonomy to prevent overclaiming after executable fixtures start, not as evidence that any tranche is complete.

## Related Nodes
- source: `state/automation/dsk_architecture_scout/knowledge_nodes/2026-06-19T21-25-07-0400-dsk-architecture-node.md`
- relationship: supersedes
- reason: Preserves runtime/AR-spatial fixture ordering while adding proof-signal integrity as a later tranche.
- source: `state/automation/deep_bug_report_scout/knowledge_nodes/2026-06-19T21-55-21-0400-deep-bug-node.md`
- relationship: extends
- reason: Adds ARExperience terminal receipt, hit-test rejection, negative-delta, and greybox scale evidence.
- source: `state/automation/domain_kit_idea_expander/knowledge_nodes/2026-06-19T22-01-38-0400-domain-kit-idea-node.md`
- relationship: expands
- reason: Converts proof-signal findings into planning inventory without replacing executable runtime fixture work.
- source: `state/automation/ecosystem_state_scout/knowledge_nodes/2026-06-19T22-10-08-0400-ecosystem-state-node.md`
- relationship: constrains
- reason: Confirms module-source strategy and public proof remain separate from proof-signal integrity.
- source: `state/automation/ecosystem_proof_scout/knowledge_nodes/2026-06-19T21-41-45-0400-ecosystem-proof-node.md`
- relationship: constrains
- reason: Separates local, fetched-ref, aggregate, targeted, browser, npm, package-version, and hardening proof claims.

## Next Search Branches
- branch: runtime-failure-boundary-fixtures
  files or folders: `src/domain-service-kit.js`, `src/runtime-kit.js`, `src/game-kit-composer.js`, `src/engine.js`, `src/ecs.js`, `tests/domain-service-kit-smoke.mjs`
  question: What is the smallest non-scout executable fixture set for namespace policy, install rollback, dependency parity, failed-tick lifetime, and metadata truth?
- branch: lifecycle-parity-fixtures
  files or folders: `src/action-movement-kit.js`, `src/terrain-kit.js`, `src/ar-modes/camera-overlay.js`, `src/ar-launcher.js`, `src/ar-kit.js`
  question: Which held-input receipt, terrain parity, partial-start cleanup, and stopped-session rows should join tranche 2?
- branch: query-command-semantics-fixtures
  files or folders: `src/landmark-guidance-kit.js`, `src/environmental-affordance-kit.js`, `src/route-field-kit.js`, read API fixtures
  question: Which terminal receipt, query/transition, rejected command, and query isolation rows belong in the smallest executable fixture set?
- branch: read-model-orchestration-isolation-fixtures
  files or folders: `src/shaders.js`, `src/ecs.js`, `src/engine.js`, `src/surfaces.js`, `src/sequence-node.js`, proof fixtures
  question: Which registry, surface snapshot, race cleanup, and any receipt-policy fixtures belong after base runtime failure-boundary work starts?
- branch: compatibility-content-safety-fixtures
  files or folders: `src/sequences.js`, `src/runtime-kit.js`, `src/fishing-kit.js`, `src/ar-renderer.js`, proof fixtures
  question: Which legacy replay/reset, any cleanup, owning-kit lookup, and AR text-safety fixtures belong after base hardening work starts?
- branch: ar-spatial-readmodel-fixtures
  files or folders: `src/ar-launcher.js`, `src/ar-device.js`, `src/ar-modes/`, `src/spatial-room-kit.js`, AR/spatial proof fixtures
  question: Which ARKit precondition, mode fallback, launch-state snapshot, and SpatialRoom getter-isolation fixtures belong after base hardening work starts?
- branch: proof-signal-integrity-fixtures
  files or folders: `src/ar-experience-kit.js`, `src/ar-session.js`, `src/engine.js`, `src/greybox-building-kit.js`, `src/spatial-room-kit.js`, proof fixtures
  question: Which terminal receipt, helper failure, monotonic time, and finite geometry rows belong in the first executable proof-signal fixture set?
- branch: proof-readiness-claim-taxonomy
  files or folders: ecosystem proof packets, domain idea proof-readiness rows, release evidence checklists
  question: Which claim labels prevent local, fetched-ref, aggregate, targeted, browser, npm, package-version, hardening, and proof-signal evidence from being conflated?
- branch: proof-boundary-separation
  files or folders: sibling ProtoKits/Experiments proof files, public routes, npm metadata, package metadata
  question: Which proof claims are runtime hardening, lifecycle parity, query/command semantics, experience-edge proof, read-model/orchestration proof, compatibility/content-safety proof, AR/spatial read-model proof, proof-signal integrity proof, and distribution/module-source proof?

## Not Claimed
- This node does not fix bugs, add tests, edit source, edit public docs, promote ProtoKits, publish npm metadata, validate sibling fetched refs, fix public proof routes, prove browser-complete public DSK proof, prove proof-signal integrity readiness, or prove broad DSK promotion readiness.
