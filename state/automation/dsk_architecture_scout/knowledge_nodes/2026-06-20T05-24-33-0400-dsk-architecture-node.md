# Knowledge Nodes: dsk_architecture_scout 2026-06-20T05-24-33-0400

## Root Lesson
- id: dsk-query-read-model-context-root-2026-06-20-0524
- statement: DSK remains release-aligned and smoke-green, but fresh query read-model evidence adds public query helper, engine read-method, nested metadata/hazard, and stored query snapshot isolation as later hardening inventory without replacing runtime failure-boundary.
- why it matters: DSK proof, dashboards, renderers, and AI adapters can treat query outputs as read-only evidence while those outputs still mutate live runtime state or stored proof fields. That harms promotion trust, but base namespace/install/dependency hardening still comes first.

## Child Nodes
- id: dsk-release-aligned-still-context-2026-06-20-0524
  parent: dsk-query-read-model-context-root-2026-06-20-0524
  lesson: Core still matches the preflight-resolved latest release branch and passes the existing smoke suite.
  evidence: `npm run automation:preflight` resolved `latestReleaseBranch: 0.0.2`; `HEAD` and `origin/0.0.2` both resolved to `96a0c16340c50832cdb5c4c81101b87b3f0c6fa0`; ahead/behind was `0 0`; `npm test` passed 8 smoke tests.
  look further: Keep resolving latest release branch every run and treat old packet commit hashes as context only.
- id: dsk-runtime-failure-boundary-first-2026-06-20-0524
  parent: dsk-query-read-model-context-root-2026-06-20-0524
  lesson: Namespace safety, install transaction semantics, dependency parity, scheduler failed-tick lifetime, and metadata truth remain tranche 1.
  evidence: Focused probe returned inherited `__proto__` API marker with no own key, retained failed API-collision DSK metadata plus false same-object reinstall success, direct install of missing `runtime:missing`, and duplicate binding overwrite; source evidence remains `src/domain-service-kit.js:143-161`, `src/runtime-kit.js:135-215`, and `src/game-kit-composer.js:49-76`.
  look further: Write fixtures for reserved keys, null-prototype or own-key policy, rollback/preflight, dependency parity, failed-tick cleanup/diagnostics, and reset/snapshot/async metadata truth.
- id: dsk-query-read-model-later-2026-06-20-0524
  parent: dsk-query-read-model-context-root-2026-06-20-0524
  lesson: Public query helper contracts, engine read-method snapshots, nested metadata/hazard isolation, and stored query proof snapshots are a distinct later validation tranche.
  evidence: Focused probe found returned query objects changed request, cargo, landmark, affordance, hazard, and water live state or stored proof fields; source evidence includes `src/request-fulfillment-kit.js:74-80`, `src/cargo-manifest-kit.js:77-85`, `src/landmark-guidance-kit.js:79-83`, `src/environmental-affordance-kit.js:74-80`, `src/hazard-field-kit.js:180-188`, and `src/water-surface-kit.js:91-95`.
  look further: Add fixtures for exported `query*` helper isolation, engine read-method snapshots, nested metadata/hazard clone/freeze behavior, and `lastQuery`/`lastCollision` storage policy after tranche 1 starts.
- id: dsk-content-boundary-objective-still-later-2026-06-20-0524
  parent: dsk-query-read-model-context-root-2026-06-20-0524
  lesson: Content boundary, preset identity, objective threshold, and content dataset validation remain separate from query read-model isolation.
  evidence: Prior DSK node `2026-06-20T04-22-52-0400` keeps ReefRescue/Fishing rows as content-boundary/objective inventory; the latest query evidence targets read-only return values and stored query fields.
  look further: Keep `createReefRescueKit()` boundary status, FishingKit preset identity, and objective/content validation fixtures separate from query read-model fixtures.
- id: dsk-module-source-regression-separate-2026-06-20-0524
  parent: dsk-query-read-model-context-root-2026-06-20-0524
  lesson: Public/local/fetched DSK proof remains a module-source strategy blocker, not query read-model hardening evidence.
  evidence: Ecosystem state node `2026-06-20T05-11-41-0400` and ecosystem proof node `2026-06-20T04-42-18-0400` keep ProtoKits package resolution, Experiments targeted proof, public `Booting...`, npm 404, aggregate-vs-targeted proof, and package-version policy separate from hardening rows.
  look further: Let ecosystem/proof lanes choose one package/workspace/CDN/same-origin/build-step import-map model.
- id: dsk-core-boundary-preserved-2026-06-20-0524
  parent: dsk-query-read-model-context-root-2026-06-20-0524
  lesson: Query read-model rows are core validation-surface candidates for existing public APIs, not an instruction to add new gameplay kits to core.
  evidence: `docs/how-to-protokit.md:7-15`, `docs/how-to-protokit.md:53-68`, and `docs/domain_ideas.md:1164-1192` keep core focused on runtime contracts and validation invariants while new reusable implementation stays in ProtoKits.
  look further: Route new reusable query-heavy kits to ProtoKits, but harden existing core read contracts in a non-scout validation lane.

## Related Nodes
- source: `state/automation/dsk_architecture_scout/knowledge_nodes/2026-06-20T04-22-52-0400-dsk-architecture-node.md`
- relationship: supersedes
- reason: Preserves runtime failure-boundary and content-boundary/objective rows while adding query read-model isolation rows.
- source: `state/automation/deep_bug_report_scout/knowledge_nodes/2026-06-20T04-54-16-0400-deep-bug-node.md`
- relationship: extends
- reason: Adds public query helper and engine read-method mutation evidence as DSK promotion-adjacent validation inventory.
- source: `state/automation/domain_kit_idea_expander/knowledge_nodes/2026-06-20T05-02-13-0400-domain-kit-idea-node.md`
- relationship: confirms
- reason: Maps the newest deep-bug evidence to Query Read Model Isolation instead of duplicating module-source, query-command, or source-state families.
- source: `state/automation/ecosystem_state_scout/knowledge_nodes/2026-06-20T05-11-41-0400-ecosystem-state-node.md`
- relationship: constrains
- reason: Keeps public/local/fetched module-source proof blocker separate from query read-model hardening.
- source: `state/automation/ecosystem_proof_scout/knowledge_nodes/2026-06-20T04-42-18-0400-ecosystem-proof-node.md`
- relationship: constrains
- reason: Separates local, fetched-ref, targeted, browser, npm, package-version, hardening, and proof claims.

## Next Search Branches
- branch: runtime-failure-boundary-fixtures
  files or folders: `src/domain-service-kit.js`, `src/runtime-kit.js`, `src/game-kit-composer.js`, `src/engine.js`, `tests/domain-service-kit-smoke.mjs`
  question: What is the smallest non-scout executable fixture set for namespace policy, install rollback, dependency parity, failed-tick lifetime, and metadata truth?
- branch: query-read-model-isolation-fixtures
  files or folders: `src/request-fulfillment-kit.js`, `src/cargo-manifest-kit.js`, `src/landmark-guidance-kit.js`, `src/environmental-affordance-kit.js`, `src/hazard-field-kit.js`, `src/water-surface-kit.js`
  question: Which exported helpers and engine read methods should clone, freeze, or serialize read models by default?
- branch: stored-query-proof-snapshots
  files or folders: query-heavy kits with `lastQuery`, `lastCollision`, telemetry, and proof snapshot fields
  question: Should stored query proof fields clone/freeze at write time, read time, or both?
- branch: nested-metadata-hazard-policy
  files or folders: metadata-heavy datasets, hazard descriptors, authored-source isolation rows
  question: Should nested metadata and hazards always be cloned/frozen for public read output, with mutable handles exposed only through explicit command APIs?
- branch: module-source-proof-boundary
  files or folders: ecosystem proof/state packets, sibling ProtoKits/Experiments proof paths, public CDN/raw URLs
  question: Which proof claims are distribution/module-source issues rather than runtime, composition, identity, content-boundary, or query-read-model hardening?

## Not Claimed
- This node does not fix bugs, add tests, edit source, edit public docs, promote ProtoKits, publish npm metadata, validate sibling fetched refs, fix public proof routes, prove runtime failure-boundary readiness, prove query-read-model readiness, prove content-boundary/objective readiness, prove runtime identity/lifecycle readiness, prove composition-proof ownership readiness, prove proof-signal integrity readiness, or prove broad DSK promotion readiness.
