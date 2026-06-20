# Knowledge Nodes: dsk_architecture_scout 2026-06-19T16-23-39-0400

## Root Lesson
- id: dsk-layered-fixture-queue-root-2026-06-19-1623
- statement: DSK remains release-aligned and test-green, but the useful next state is an ordered fixture queue: base runtime failure-boundary fixtures first, lifecycle parity fixtures second, experience-edge fixtures third, and public module-source proof separately.
- why it matters: Live probes reconfirm base DSK/scheduler hardening gaps on the current release head, while neighboring lanes add fresh lifecycle parity bugs that are real core validation inputs but should not displace the immediate non-scout DSK hardening tranche.

## Child Nodes
- id: dsk-release-aligned-still-context-2026-06-19-1623
  parent: dsk-layered-fixture-queue-root-2026-06-19-1623
  lesson: Core still matches the preflight-resolved latest release branch and passes the existing smoke suite.
  evidence: `npm run automation:preflight` resolved `latestReleaseBranch: 0.0.2`; `HEAD` and `origin/0.0.2` both resolved to `96a0c16340c50832cdb5c4c81101b87b3f0c6fa0`; ahead/behind was `0 0`; `npm test` passed 8 smoke tests.
  look further: Keep resolving latest release branch every run and treat old packet commit hashes as context only.
- id: dsk-runtime-failure-boundary-first-2026-06-19-1623
  parent: dsk-layered-fixture-queue-root-2026-06-19-1623
  lesson: Namespace safety, install transaction semantics, dependency parity, scheduler failed-tick lifetime, and metadata truth remain tranche 1.
  evidence: Live probe returned inherited `__proto__` API marker with no own key, retained failed API-collision DSK metadata plus false same-object reinstall success, direct install of missing `runtime:missing`, and failed-tick event replay with the recovery tick; source evidence remains `src/domain-service-kit.js:143-161`, `src/runtime-kit.js:135-215`, `src/game-kit-composer.js:49-76`, `src/engine.js:168-214`, and `src/ecs.js:251-370`.
  look further: Write fixtures for reserved keys, null-prototype or own-key policy, rollback/preflight, dependency parity, failed-tick cleanup/diagnostics, and reset/snapshot/async metadata truth.
- id: dsk-lifecycle-parity-second-2026-06-19-1623
  parent: dsk-layered-fixture-queue-root-2026-06-19-1623
  lesson: Lifecycle parity rows belong in tranche 2 because they are core validation-surface bugs but not DSK install-boundary bugs.
  evidence: Deep bug node `2026-06-19T15-53-59-0400` and live source scans show repeated held-glide `GlideStarted`, terrain spline query/chunk mismatch risk, camera-overlay partial-start stream retention, and AR launch stop leaving `ARSessionState` running; source evidence includes `src/action-movement-kit.js:230-250`, `src/terrain-kit.js:303-312`, `src/terrain-kit.js:548-564`, `src/ar-modes/camera-overlay.js:16-37`, `src/ar-launcher.js:131-133`, and `src/ar-kit.js:68-87`.
  look further: Add held-input receipt transition, terrain query/chunk parity, partial-start cleanup, and stopped-session state fixtures after the base runtime boundary starts.
- id: dsk-experience-edge-third-2026-06-19-1623
  parent: dsk-layered-fixture-queue-root-2026-06-19-1623
  lesson: Experience-edge bugs remain downstream proof inventory after runtime failure-boundary and lifecycle parity fixtures are underway.
  evidence: DSK node `2026-06-19T15-25-28-0400`, domain idea node `2026-06-19T15-00-41-0400`, and deep bug node `2026-06-19T14-54-04-0400` carry recovery receipt, launch fallback, quality profile, and content dataset rows.
  look further: Bundle recovery receipts, launch fallback, quality profiles, and content dataset contracts as tranche 3.
- id: dsk-proof-boundary-separation-2026-06-19-1623
  parent: dsk-layered-fixture-queue-root-2026-06-19-1623
  lesson: Runtime hardening proof, lifecycle parity proof, experience-edge proof, public browser proof, fetched-ref sibling proof, aggregate proof, npm metadata, and package-version policy remain separate evidence categories.
  evidence: Ecosystem state node `2026-06-19T16-09-07-0400` and ecosystem proof node `2026-06-19T15-40-03-0400` keep module-source strategy as the public/fetched-ref blocker while DSK hardening rows remain separate.
  look further: Do not let HTTP 200, local green tests, public raw/CDN reachability, or fetched aggregate checks stand in for DSK hardening proof.

## Related Nodes
- source: `state/automation/dsk_architecture_scout/knowledge_nodes/2026-06-19T15-25-28-0400-dsk-architecture-node.md`
- relationship: supersedes
- reason: Preserves the boundary split while sharpening it into an ordered fixture queue.
- source: `state/automation/deep_bug_report_scout/knowledge_nodes/2026-06-19T15-53-59-0400-deep-bug-node.md`
- relationship: extends
- reason: Adds lifecycle parity rows that should join tranche 2.
- source: `state/automation/domain_kit_idea_expander/knowledge_nodes/2026-06-19T16-01-29-0400-domain-kit-idea-node.md`
- relationship: expands
- reason: Converts lifecycle parity bugs into advisory inventory without replacing base runtime hardening.
- source: `state/automation/ecosystem_state_scout/knowledge_nodes/2026-06-19T16-09-07-0400-ecosystem-state-node.md`
- relationship: constrains
- reason: Keeps public/fetched-ref module-source proof separate from runtime hardening.
- source: `state/automation/ecosystem_proof_scout/knowledge_nodes/2026-06-19T15-40-03-0400-ecosystem-proof-node.md`
- relationship: constrains
- reason: Confirms local proof, fetched-ref proof, public browser proof, aggregate proof, npm metadata, and hardening proof are separate.

## Next Search Branches
- branch: runtime-failure-boundary-fixtures
  files or folders: `src/domain-service-kit.js`, `src/runtime-kit.js`, `src/game-kit-composer.js`, `src/engine.js`, `src/ecs.js`, `tests/domain-service-kit-smoke.mjs`
  question: What is the smallest non-scout executable fixture set for namespace policy, install rollback, dependency parity, failed-tick lifetime, and metadata truth?
- branch: lifecycle-parity-fixtures
  files or folders: `src/action-movement-kit.js`, `src/terrain-kit.js`, `src/ar-modes/camera-overlay.js`, `src/ar-launcher.js`, `src/ar-kit.js`
  question: Which held-input receipt, terrain parity, partial-start cleanup, and stopped-session rows should join tranche 2?
- branch: experience-edge-proof-tranche
  files or folders: `src/character-ragdoll-kit.js`, `src/ar-launcher.js`, `src/realism-kit.js`, `src/fishing-kit.js`, edge proof fixtures
  question: Which recovery, launch, quality, and content rows belong after base runtime and lifecycle fixtures begin?
- branch: proof-boundary-separation
  files or folders: sibling ProtoKits/Experiments proof files, public routes, npm metadata, package metadata
  question: Which proof claims are runtime hardening, lifecycle parity, domain edge proof, and distribution/module-source proof?

## Not Claimed
- This node does not fix bugs, add tests, edit source, edit public docs, promote ProtoKits, publish npm metadata, validate sibling fetched refs, fix public proof routes, or prove browser-complete public DSK proof.
