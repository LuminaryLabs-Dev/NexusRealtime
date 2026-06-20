# Knowledge Nodes: dsk_architecture_scout 2026-06-20T06-23-50-0400

## Root Lesson
- id: dsk-scheduler-world-mutation-context-root-2026-06-20-0623
- statement: DSK remains release-aligned and smoke-green, but fresh scheduler/world mutation evidence expands tranche 1 runtime failure-boundary with active-run scheduler mutation, phase topology, `runSystem()` membership, and low-level event queue payload isolation.
- why it matters: DSK graphs, proof adapters, SequenceNode bridges, and runtime kits can look deterministic while one tick changes scheduler topology, processes removed entities, or mutates queued event evidence. Query read-model and public module-source work stay useful, but lower-level scheduler/world boundaries must be fixture-backed first.

## Child Nodes
- id: dsk-release-aligned-still-context-2026-06-20-0623
  parent: dsk-scheduler-world-mutation-context-root-2026-06-20-0623
  lesson: Core still matches the preflight-resolved latest release branch and passes the existing smoke suite.
  evidence: `npm run automation:preflight` resolved `latestReleaseBranch: 0.0.2`; `HEAD` and `origin/0.0.2` both resolved to `96a0c16340c50832cdb5c4c81101b87b3f0c6fa0`; ahead/behind was `0 0`; `npm test` passed 8 smoke tests.
  look further: Keep resolving latest release branch every run and treat old packet commit hashes as context only.
- id: dsk-runtime-failure-boundary-first-2026-06-20-0623
  parent: dsk-scheduler-world-mutation-context-root-2026-06-20-0623
  lesson: Namespace safety, install transaction semantics, dependency parity, scheduler failed-tick lifetime, scheduler/world mutation isolation, and metadata truth remain tranche 1.
  evidence: Focused probe returned inherited `__proto__` API marker with no own key, retained failed API-collision DSK metadata plus false same-object reinstall success, direct install of missing `runtime:missing`, duplicate binding overwrite, same-pass scheduler system/phase execution, removed-entity `runSystem()` handler calls, and mutable `readEvents()` payloads.
  look further: Write fixtures for reserved keys, null-prototype or own-key policy, rollback/preflight, dependency parity, failed-tick cleanup/diagnostics, active-run scheduler mutation, phase topology, `runSystem()` membership, event queue isolation, and reset/snapshot/async metadata truth.
- id: dsk-scheduler-world-mutation-core-2026-06-20-0623
  parent: dsk-scheduler-world-mutation-context-root-2026-06-20-0623
  lesson: Active scheduler mutation, phase topology mutation, `runSystem()` membership, and `world.readEvents()` payload isolation are core validation-surface rows, not new gameplay implementation requests.
  evidence: Deep bug node `2026-06-20T05-53-01-0400` reproduces the runtime behavior; domain idea node `2026-06-20T06-01-42-0400` maps it to Scheduler World Mutation Isolation; source evidence includes `src/ecs.js:251-260`, `src/ecs.js:272-294`, `src/ecs.js:315-356`, and `src/engine.js:168-214`.
  look further: Add scheduler/world fixtures in a non-scout core-validation lane before treating higher-level proof rows as deterministic.
- id: dsk-query-read-model-still-later-2026-06-20-0623
  parent: dsk-scheduler-world-mutation-context-root-2026-06-20-0623
  lesson: Public query helper contracts, engine read-method snapshots, nested metadata/hazard isolation, and stored query proof snapshots remain a distinct later validation tranche.
  evidence: Prior DSK node `2026-06-20T05-24-33-0400` keeps query read-model isolation live; current scheduler/world evidence is lower-level ECS/scheduler behavior and does not replace query helper fixtures.
  look further: Add exported `query*`, engine read-method, nested metadata/hazard, and `lastQuery`/`lastCollision` fixtures after tranche 1 starts.
- id: dsk-module-source-regression-separate-2026-06-20-0623
  parent: dsk-scheduler-world-mutation-context-root-2026-06-20-0623
  lesson: Public/local/fetched DSK proof remains a module-source strategy blocker, not scheduler/world hardening evidence.
  evidence: Ecosystem state node `2026-06-20T06-09-43-0400` and ecosystem proof node `2026-06-20T05-39-53-0400` keep ProtoKits package resolution, Experiments targeted proof, public `Booting...`, npm 404, aggregate-vs-targeted proof, and package-version policy separate from hardening rows.
  look further: Let ecosystem/proof lanes choose one package/workspace/CDN/same-origin/build-step import-map model.
- id: dsk-core-boundary-preserved-2026-06-20-0623
  parent: dsk-scheduler-world-mutation-context-root-2026-06-20-0623
  lesson: Scheduler/world mutation rows belong to core because they are runtime primitives; new reusable gameplay kit work still belongs in ProtoKits and playable proof in Experiments.
  evidence: `docs/how-to-protokit.md:7-15`, `docs/how-to-protokit.md:53-68`, and `docs/domain_ideas.md:1195-1224` keep the ownership boundary explicit.
  look further: Harden scheduler/world invariants in core validation while keeping reusable implementation and proof routing outside core.

## Related Nodes
- source: `state/automation/dsk_architecture_scout/knowledge_nodes/2026-06-20T05-24-33-0400-dsk-architecture-node.md`
- relationship: supersedes
- reason: Preserves runtime failure-boundary and query read-model rows while adding scheduler/world mutation isolation as lower-level tranche 1 evidence.
- source: `state/automation/deep_bug_report_scout/knowledge_nodes/2026-06-20T05-53-01-0400-deep-bug-node.md`
- relationship: extends
- reason: Adds active scheduler mutation, phase topology, `runSystem()` removed-entity iteration, and `readEvents()` payload aliasing as DSK promotion-adjacent validation inventory.
- source: `state/automation/domain_kit_idea_expander/knowledge_nodes/2026-06-20T06-01-42-0400-domain-kit-idea-node.md`
- relationship: confirms
- reason: Maps the newest deep-bug evidence to Scheduler World Mutation Isolation instead of duplicating query read-model or module-source families.
- source: `state/automation/ecosystem_state_scout/knowledge_nodes/2026-06-20T06-09-43-0400-ecosystem-state-node.md`
- relationship: constrains
- reason: Keeps public/local/fetched module-source proof blocker separate from scheduler/world hardening.
- source: `state/automation/ecosystem_proof_scout/knowledge_nodes/2026-06-20T05-39-53-0400-ecosystem-proof-node.md`
- relationship: constrains
- reason: Separates local, fetched-ref, targeted, browser, npm, package-version, hardening, and proof claims.

## Next Search Branches
- branch: runtime-failure-boundary-fixtures
  files or folders: `src/domain-service-kit.js`, `src/runtime-kit.js`, `src/game-kit-composer.js`, `src/engine.js`, `src/ecs.js`, `tests/domain-service-kit-smoke.mjs`
  question: What is the smallest non-scout executable fixture set for namespace policy, install rollback, dependency parity, failed-tick lifetime, scheduler/world mutation isolation, event queue isolation, and metadata truth?
- branch: scheduler-active-run-mutation
  files or folders: `src/ecs.js`, `src/engine.js`, scheduler fixtures
  question: Should same-phase system additions and dynamic phase additions reject, queue to next tick, or execute immediately by documented design?
- branch: runsystem-membership-snapshot
  files or folders: `src/ecs.js`, cleanup/despawn/collision/transfer/objective fixtures
  question: Should `runSystem()` snapshot component values at query time or recheck entity/component membership before each handler?
- branch: event-queue-payload-isolation
  files or folders: `src/ecs.js`, `src/engine.js`, `src/surfaces.js`, SequenceNode bridge fixtures
  question: Should event payloads be cloned/frozen on emit, on read, or at proof/surface boundaries?
- branch: query-read-model-isolation-fixtures
  files or folders: public query helper kits and engine read methods
  question: Which query read-model isolation rows should become executable fixtures after lower-level runtime failure-boundary work starts?
- branch: module-source-proof-boundary
  files or folders: ecosystem proof/state packets, sibling ProtoKits/Experiments proof paths, public CDN/raw URLs
  question: Which proof claims are distribution/module-source issues rather than runtime, scheduler/world, composition, identity, content-boundary, or query-read-model hardening?

## Not Claimed
- This node does not fix bugs, add tests, edit source, edit public docs, promote ProtoKits, publish npm metadata, validate sibling fetched refs, fix public proof routes, prove runtime failure-boundary readiness, prove scheduler/world mutation readiness, prove query-read-model readiness, prove content-boundary/objective readiness, prove runtime identity/lifecycle readiness, prove composition-proof ownership readiness, prove proof-signal integrity readiness, or prove broad DSK promotion readiness.
