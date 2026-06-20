# Knowledge Nodes: dsk_architecture_scout 2026-06-19T17-22-41-0400

## Root Lesson
- id: dsk-query-command-queue-split-root-2026-06-19-1722
- statement: DSK remains release-aligned and smoke-green, but the ordered fixture queue now needs an explicit query/command semantics category after runtime failure-boundary and lifecycle parity, while public module-source proof stays separate.
- why it matters: Live probes reconfirm tranche 1 DSK/runtime gaps, and fresh neighboring evidence shows terminal receipts, side-effect-free queries, rejected commands, and query snapshot isolation are real core API hardening rows that should not displace the first runtime failure-boundary fixtures.

## Child Nodes
- id: dsk-release-aligned-still-context-2026-06-19-1722
  parent: dsk-query-command-queue-split-root-2026-06-19-1722
  lesson: Core still matches the preflight-resolved latest release branch and passes the existing smoke suite.
  evidence: `npm run automation:preflight` resolved `latestReleaseBranch: 0.0.2`; `HEAD` and `origin/0.0.2` both resolved to `96a0c16340c50832cdb5c4c81101b87b3f0c6fa0`; ahead/behind was `0 0`; `npm test` passed 8 smoke tests.
  look further: Keep resolving latest release branch every run and treat old packet commit hashes as context only.
- id: dsk-runtime-failure-boundary-first-2026-06-19-1722
  parent: dsk-query-command-queue-split-root-2026-06-19-1722
  lesson: Namespace safety, install transaction semantics, dependency parity, scheduler failed-tick lifetime, and metadata truth remain tranche 1.
  evidence: Live probe returned inherited `__proto__` API marker with no own key, retained failed API-collision DSK metadata plus false same-object reinstall success, direct install of missing `runtime:missing`, and failed-tick event replay with the recovery tick; source evidence remains `src/domain-service-kit.js:143-161`, `src/runtime-kit.js:135-215`, `src/game-kit-composer.js:49-76`, `src/engine.js:168-214`, and `src/ecs.js:251-370`.
  look further: Write fixtures for reserved keys, null-prototype or own-key policy, rollback/preflight, dependency parity, failed-tick cleanup/diagnostics, and reset/snapshot/async metadata truth.
- id: dsk-lifecycle-parity-second-2026-06-19-1722
  parent: dsk-query-command-queue-split-root-2026-06-19-1722
  lesson: Lifecycle parity rows remain tranche 2 because they are core validation-surface bugs but not DSK install-boundary bugs.
  evidence: Prior DSK node `2026-06-19T16-23-39-0400`, deep bug node `2026-06-19T15-53-59-0400`, and domain idea node `2026-06-19T16-01-29-0400` carry held-input receipts, terrain query/chunk parity, partial-start cleanup, and stopped-session state.
  look further: Add held-input receipt transition, terrain query/chunk parity, partial-start cleanup, and stopped-session state fixtures after tranche 1 starts.
- id: dsk-query-command-semantics-third-2026-06-19-1722
  parent: dsk-query-command-queue-split-root-2026-06-19-1722
  lesson: Query/command semantics should become a distinct later fixture category rather than being folded into runtime install hardening or public proof.
  evidence: Live probe showed inactive completed LandmarkGuidance emitted discovered/reached/activated receipts, EnvironmentalAffordance repeated `nearby()` emitted 3 entered receipts, missing activation wrote `activeAffordanceId:"missing"` without activation, and RouteField returned a mutable live marker; source evidence includes `src/landmark-guidance-kit.js:43-45`, `src/landmark-guidance-kit.js:85-121`, `src/environmental-affordance-kit.js:74-96`, and `src/route-field-kit.js:44-92`.
  look further: Add terminal receipt, query-versus-transition, rejected-command state, and query snapshot isolation fixtures after runtime failure-boundary and lifecycle parity categories are explicit.
- id: dsk-experience-edge-fourth-2026-06-19-1722
  parent: dsk-query-command-queue-split-root-2026-06-19-1722
  lesson: Experience-edge bugs remain downstream proof inventory after runtime, lifecycle, and query/command semantics fixtures are underway.
  evidence: DSK node `2026-06-19T16-23-39-0400` and earlier domain/deep bug nodes carry recovery receipt, launch fallback, quality profile, and content dataset rows.
  look further: Bundle recovery receipts, launch fallback, quality profiles, and content dataset contracts as a downstream proof tranche.
- id: dsk-proof-boundary-separation-2026-06-19-1722
  parent: dsk-query-command-queue-split-root-2026-06-19-1722
  lesson: Runtime hardening proof, lifecycle parity proof, query/command semantics proof, experience-edge proof, public browser proof, fetched-ref sibling proof, aggregate proof, npm metadata, and package-version policy remain separate evidence categories.
  evidence: Ecosystem state node `2026-06-19T17-10-00-0400` and ecosystem proof node `2026-06-19T16-39-19-0400` keep module-source strategy as the public/fetched-ref blocker while DSK hardening rows remain separate.
  look further: Do not let HTTP 200, local green tests, public raw/CDN reachability, or fetched aggregate checks stand in for DSK hardening proof.

## Related Nodes
- source: `state/automation/dsk_architecture_scout/knowledge_nodes/2026-06-19T16-23-39-0400-dsk-architecture-node.md`
- relationship: supersedes
- reason: Preserves the layered fixture queue while adding query/command semantics as a distinct downstream category.
- source: `state/automation/deep_bug_report_scout/knowledge_nodes/2026-06-19T16-54-05-0400-deep-bug-node.md`
- relationship: extends
- reason: Adds terminal receipt, query transition, rejected command, and query isolation rows.
- source: `state/automation/domain_kit_idea_expander/knowledge_nodes/2026-06-19T17-01-13-0400-domain-kit-idea-node.md`
- relationship: expands
- reason: Converts query/command semantics bugs into advisory proof inventory without replacing base runtime hardening.
- source: `state/automation/ecosystem_state_scout/knowledge_nodes/2026-06-19T17-10-00-0400-ecosystem-state-node.md`
- relationship: constrains
- reason: Keeps public/fetched-ref module-source proof separate from runtime and query/command hardening.
- source: `state/automation/ecosystem_proof_scout/knowledge_nodes/2026-06-19T16-39-19-0400-ecosystem-proof-node.md`
- relationship: constrains
- reason: Confirms local proof, fetched-ref proof, public browser proof, aggregate proof, npm metadata, and hardening proof are separate.

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
- branch: experience-edge-proof-tranche
  files or folders: `src/character-ragdoll-kit.js`, `src/ar-launcher.js`, `src/realism-kit.js`, `src/fishing-kit.js`, edge proof fixtures
  question: Which recovery, launch, quality, and content rows belong after runtime, lifecycle, and query/command categories begin?
- branch: proof-boundary-separation
  files or folders: sibling ProtoKits/Experiments proof files, public routes, npm metadata, package metadata
  question: Which proof claims are runtime hardening, lifecycle parity, query/command semantics, domain edge proof, and distribution/module-source proof?

## Not Claimed
- This node does not fix bugs, add tests, edit source, edit public docs, promote ProtoKits, publish npm metadata, validate sibling fetched refs, fix public proof routes, or prove browser-complete public DSK proof.
