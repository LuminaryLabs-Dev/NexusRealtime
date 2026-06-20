# Knowledge Nodes: dsk_architecture_scout 2026-06-20T17-38-41-0400

## Root Lesson
- id: dsk-procedural-navigation-ownership-context-root-2026-06-20-1738
- statement: DSK remains release-aligned and smoke-green, but fresh procedural/navigation evidence adds command-payload ownership, navigation/procedural snapshot isolation, and procedural regenerate return-state policy to the DSK hardening queue.
- why it matters: Generated-world and pathfinding proof can look deterministic while callers mutate queued path requests, live navigation/procedural snapshots, or pending procedural generation state through returned objects. Scheduler/world mutation remains lower-level tranche 1 context, and module-source proof remains separate.

## Child Nodes
- id: dsk-release-aligned-still-context-2026-06-20-1738
  parent: dsk-procedural-navigation-ownership-context-root-2026-06-20-1738
  lesson: Core still matches the preflight-resolved latest release branch and passes the existing smoke suite.
  evidence: `npm run automation:preflight` resolved `latestReleaseBranch: 0.0.2`; `HEAD` and `origin/0.0.2` both resolved to `96a0c16340c50832cdb5c4c81101b87b3f0c6fa0`; ahead/behind was `0 0`; `npm test` passed 8 smoke tests.
  look further: Keep resolving latest release branch every run and treat old packet commit hashes as context only.
- id: dsk-runtime-failure-boundary-first-2026-06-20-1738
  parent: dsk-procedural-navigation-ownership-context-root-2026-06-20-1738
  lesson: Namespace safety, install transaction semantics, dependency parity, scheduler failed-tick lifetime, scheduler/world mutation isolation, procedural/navigation ownership, and metadata truth remain tranche 1 hardening inventory.
  evidence: Focused probe returned inherited `__proto__` API marker with no own key, retained failed API-collision DSK metadata plus false same-object reinstall success, direct install of missing `runtime:missing`, duplicate binding overwrite, caller-owned navigation endpoint aliasing, live navigation/procedural snapshots, and live procedural regenerate return state.
  look further: Write fixtures for reserved keys, null-prototype or own-key policy, rollback/preflight, dependency parity, failed-tick cleanup/diagnostics, scheduler/world mutation, procedural/navigation ownership, event queue isolation, and reset/snapshot/async metadata truth.
- id: dsk-procedural-navigation-ownership-core-2026-06-20-1738
  parent: dsk-procedural-navigation-ownership-context-root-2026-06-20-1738
  lesson: Procedural/navigation ownership rows are core validation-surface rows for existing public APIs, not new gameplay implementation requests.
  evidence: Deep bug node `2026-06-20T06:54:16-04:00` reproduces path request aliasing and live snapshot/return-state mutation; domain idea node `2026-06-20T07-00-46-0400` maps it to Procedural Navigation State Ownership; source evidence includes `src/pathfinding-kit.js:388-400`, `src/pathfinding-kit.js:455-568`, and `src/procedural-kit.js:465-591`.
  look further: Add procedural/navigation ownership fixtures in a non-scout core-validation lane before treating generated-world proof as immutable evidence.
- id: dsk-scheduler-world-mutation-still-lower-2026-06-20-1738
  parent: dsk-procedural-navigation-ownership-context-root-2026-06-20-1738
  lesson: Active scheduler mutation, phase topology mutation, `runSystem()` membership, and low-level event payload isolation remain lower-level hardening rows that procedural/navigation ownership does not replace.
  evidence: Prior DSK node `2026-06-20T06-23-50-0400` keeps scheduler/world mutation isolation in tranche 1; current procedural/navigation evidence targets public generated-world command and snapshot APIs.
  look further: Decide scheduler/world defer/reject/immediate policy before trusting higher-level generated-world proof.
- id: dsk-query-read-model-still-later-2026-06-20-1738
  parent: dsk-procedural-navigation-ownership-context-root-2026-06-20-1738
  lesson: Public query helper contracts, engine read-method snapshots, nested metadata/hazard isolation, and stored query proof snapshots remain distinct later validation inventory.
  evidence: Prior DSK node `2026-06-20T05-24-33-0400` keeps query read-model isolation live; current evidence targets procedural/navigation command payloads and proof snapshots.
  look further: Add exported `query*`, engine read-method, nested metadata/hazard, and `lastQuery`/`lastCollision` fixtures after tranche 1 starts.
- id: dsk-module-source-regression-separate-2026-06-20-1738
  parent: dsk-procedural-navigation-ownership-context-root-2026-06-20-1738
  lesson: Public/local/fetched DSK proof remains a module-source strategy blocker, not procedural/navigation ownership evidence.
  evidence: Ecosystem state node `2026-06-20T06-09-43-0400` and ecosystem proof node `2026-06-20T06-40-01-0400` keep ProtoKits package resolution, Experiments targeted proof, public `Booting...`, npm 404, aggregate-vs-targeted proof, and package-version policy separate from hardening rows.
  look further: Let ecosystem/proof lanes choose one package/workspace/CDN/same-origin/build-step import-map model.
- id: dsk-core-boundary-preserved-2026-06-20-1738
  parent: dsk-procedural-navigation-ownership-context-root-2026-06-20-1738
  lesson: Procedural/navigation rows belong to core validation because they target existing primitives; new reusable gameplay kit work still belongs in ProtoKits and playable proof in Experiments.
  evidence: `docs/how-to-protokit.md:7-15`, `docs/how-to-protokit.md:53-68`, `docs/domain_ideas.md:1226-1245`, and `docs/kits_ideas.md:1181-1215` keep the ownership boundary explicit.
  look further: Harden procedural/navigation invariants in core validation while keeping new reusable implementation and proof routing outside core.

## Related Nodes
- source: `state/automation/dsk_architecture_scout/knowledge_nodes/2026-06-20T06-23-50-0400-dsk-architecture-node.md`
- relationship: supersedes
- reason: Preserves runtime failure-boundary and scheduler/world mutation rows while adding procedural/navigation ownership as the newest generated-world proof-state row.
- source: `state/automation/deep_bug_report_scout/knowledge_nodes/2026-06-20T06-54-16-0400-deep-bug-node.md`
- relationship: extends
- reason: Adds navigation command endpoint aliasing, navigation/procedural live snapshots, and regenerate return-state mutation as DSK promotion-adjacent validation inventory.
- source: `state/automation/domain_kit_idea_expander/knowledge_nodes/2026-06-20T07-00-46-0400-domain-kit-idea-node.md`
- relationship: confirms
- reason: Maps the newest deep-bug evidence to Procedural Navigation State Ownership instead of duplicating scheduler/world, query read-model, traversal cost, or module-source families.
- source: `state/automation/ecosystem_state_scout/knowledge_nodes/2026-06-20T06-09-43-0400-ecosystem-state-node.md`
- relationship: constrains
- reason: Keeps public/local/fetched module-source proof blocker separate from procedural/navigation hardening.
- source: `state/automation/ecosystem_proof_scout/knowledge_nodes/2026-06-20T06-40-01-0400-ecosystem-proof-node.md`
- relationship: constrains
- reason: Separates local, fetched-ref, targeted, browser, npm, package-version, hardening, and proof claims.

## Next Search Branches
- branch: runtime-failure-boundary-fixtures
  files or folders: `src/domain-service-kit.js`, `src/runtime-kit.js`, `src/game-kit-composer.js`, `src/engine.js`, `src/ecs.js`, `tests/domain-service-kit-smoke.mjs`
  question: What is the smallest non-scout executable fixture set for namespace policy, install rollback, dependency parity, failed-tick lifetime, scheduler/world mutation isolation, event queue isolation, procedural/navigation ownership, and metadata truth?
- branch: navigation-command-payload-ownership
  files or folders: `src/pathfinding-kit.js`, `tests/procedural-navigation-smoke.mjs`
  question: Should path request endpoints clone/freeze at enqueue, return, event emit, and agent assignment boundaries?
- branch: navigation-proof-snapshot-isolation
  files or folders: `src/pathfinding-kit.js`, `src/navmesh-kit.js`, navigation proof fixtures
  question: Which navigation read APIs should return immutable snapshots versus explicit mutable handles?
- branch: procedural-proof-snapshot-isolation
  files or folders: `src/procedural-kit.js`, `src/navmesh-kit.js`, generated-space proof fixtures
  question: Should procedural snapshots isolate at resource write, public read, or downstream adapter boundaries?
- branch: procedural-command-return-state
  files or folders: `src/procedural-kit.js`, procedural regenerate fixtures
  question: Should `regenerate()` return a cloned summary instead of the live pending state?
- branch: module-source-proof-boundary
  files or folders: ecosystem proof/state packets, sibling ProtoKits/Experiments proof paths, public CDN/raw URLs
  question: Which proof claims are distribution/module-source issues rather than runtime, scheduler/world, procedural/navigation, composition, identity, content-boundary, or query-read-model hardening?

## Not Claimed
- This node does not fix bugs, add tests, edit source, edit public docs, promote ProtoKits, publish npm metadata, validate sibling fetched refs, fix public proof routes, prove runtime failure-boundary readiness, prove scheduler/world mutation readiness, prove procedural/navigation ownership readiness, prove query-read-model readiness, prove content-boundary/objective readiness, prove runtime identity/lifecycle readiness, prove composition-proof ownership readiness, prove proof-signal integrity readiness, or prove broad DSK promotion readiness.
