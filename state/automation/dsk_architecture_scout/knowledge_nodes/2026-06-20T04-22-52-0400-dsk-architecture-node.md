# Knowledge Nodes: dsk_architecture_scout 2026-06-20T04-22-52-0400

## Root Lesson
- id: dsk-content-boundary-objective-context-root-2026-06-20-0422
- statement: DSK remains release-aligned and smoke-green, but fresh Fishing/ReefRescue evidence adds content boundary, preset identity, and objective validation as later hardening inventory without replacing runtime failure-boundary.
- why it matters: Content-driven kits and proof routes can look reusable or complete while core exports themed presets, factories share runtime ids across variants, or invalid objectives complete without action evidence. Those risks affect promotion trust, but base namespace/install/dependency hardening still comes first.

## Child Nodes
- id: dsk-release-aligned-still-context-2026-06-20-0422
  parent: dsk-content-boundary-objective-context-root-2026-06-20-0422
  lesson: Core still matches the preflight-resolved latest release branch and passes the existing smoke suite.
  evidence: `npm run automation:preflight` resolved `latestReleaseBranch: 0.0.2`; `HEAD` and `origin/0.0.2` both resolved to `96a0c16340c50832cdb5c4c81101b87b3f0c6fa0`; ahead/behind was `0 0`; `npm test` passed 8 smoke tests.
  look further: Keep resolving latest release branch every run and treat old packet commit hashes as context only.
- id: dsk-runtime-failure-boundary-first-2026-06-20-0422
  parent: dsk-content-boundary-objective-context-root-2026-06-20-0422
  lesson: Namespace safety, install transaction semantics, dependency parity, scheduler failed-tick lifetime, and metadata truth remain tranche 1.
  evidence: Focused probe returned inherited `__proto__` API marker with no own key, retained failed API-collision DSK metadata plus false same-object reinstall success, and direct install of missing `runtime:missing`; source evidence remains `src/domain-service-kit.js:143-161`, `src/runtime-kit.js:135-215`, and `src/game-kit-composer.js:49-76`.
  look further: Write fixtures for reserved keys, null-prototype or own-key policy, rollback/preflight, dependency parity, failed-tick cleanup/diagnostics, and reset/snapshot/async metadata truth.
- id: dsk-content-boundary-objective-later-2026-06-20-0422
  parent: dsk-content-boundary-objective-context-root-2026-06-20-0422
  lesson: Public API product-boundary checks, preset runtime identity, objective threshold policy, and content dataset validation are a distinct later hardening tranche.
  evidence: Focused probe found `createFishingKit({ id:"custom-fishing" })` and `createReefRescueKit({ id:"reef-custom" })` both returned runtime id `fishing`, and a zero-target Fishing objective completed with `caught:0`; source evidence includes `src/index.js:114-120`, `src/reef-rescue-kit.js:4-91`, `src/fishing-kit.js:572-584`, `src/fishing-kit.js:683-704`, and `src/fishing-kit.js:794-801`.
  look further: Add boundary fixtures for product/themed exports, FishingKit preset id policy, objective target semantics, and unified content diagnostics after tranche 1 starts.
- id: dsk-runtime-identity-lifecycle-still-later-2026-06-20-0422
  parent: dsk-content-boundary-objective-context-root-2026-06-20-0422
  lesson: Binding ownership, ECS definition identity, SequenceNode install-only idempotency, and disposed event-bus listener parity remain separate runtime identity/lifecycle inventory.
  evidence: Prior DSK node `2026-06-20T03-23-42-0400` plus current binding probe keep duplicate binding overwrite live; content preset identity depends on this ownership layer but does not replace it.
  look further: Add fixtures for duplicate binding policy, explicit shared ECS definition policy, install-only kit installed-state records, and disposed listener parity.
- id: dsk-module-source-regression-separate-2026-06-20-0422
  parent: dsk-content-boundary-objective-context-root-2026-06-20-0422
  lesson: Public/local/fetched DSK proof remains a module-source strategy blocker, not DSK runtime or content-boundary hardening evidence.
  evidence: Ecosystem state node `2026-06-20T04-10-40-0400` and ecosystem proof node `2026-06-20T03-41-33-0400` keep ProtoKits package resolution, Experiments targeted proof, public `Booting...`, npm 404, aggregate-vs-targeted proof, and package-version policy separate from hardening rows.
  look further: Let ecosystem/proof lanes choose one package/workspace/CDN/same-origin/build-step import-map model.
- id: dsk-core-boundary-preserved-2026-06-20-0422
  parent: dsk-content-boundary-objective-context-root-2026-06-20-0422
  lesson: Content boundary rows should not become an instruction to add product-specific content to core.
  evidence: `docs/how-to-protokit.md:7-15`, `docs/how-to-protokit.md:53-68`, `docs/protokit-boundaries.md:5-15`, and `docs/protokit-boundaries.md:41-62` keep core focused on runtime contracts, stable primitives, and validation invariants while ProtoKits owns reusable behavior and Experiments owns proof.
  look further: Route new content-kit implementations to ProtoKits and playable/browser proof to Experiments; core work should be boundary compatibility and validation while legacy exports remain.

## Related Nodes
- source: `state/automation/dsk_architecture_scout/knowledge_nodes/2026-06-20T03-23-42-0400-dsk-architecture-node.md`
- relationship: supersedes
- reason: Preserves runtime failure-boundary and runtime identity/lifecycle rows while adding content boundary/objective rows.
- source: `state/automation/deep_bug_report_scout/knowledge_nodes/2026-06-20T03-55-08-0400-deep-bug-node.md`
- relationship: extends
- reason: Adds ReefRescue core export, FishingKit fixed id, zero/negative objective completion, and split content validation as DSK promotion-adjacent inventory.
- source: `state/automation/domain_kit_idea_expander/knowledge_nodes/2026-06-20T04-01-35-0400-domain-kit-idea-node.md`
- relationship: confirms
- reason: Maps the newest deep-bug evidence to Content Boundary And Objective Contract instead of duplicating runtime identity or module-source families.
- source: `state/automation/ecosystem_state_scout/knowledge_nodes/2026-06-20T04-10-40-0400-ecosystem-state-node.md`
- relationship: constrains
- reason: Keeps public/local/fetched module-source proof blocker separate from runtime, identity, composition, and content-boundary hardening.
- source: `state/automation/ecosystem_proof_scout/knowledge_nodes/2026-06-20T03-41-33-0400-ecosystem-proof-node.md`
- relationship: constrains
- reason: Separates local, fetched-ref, targeted, browser, npm, package-version, hardening, and proof claims.

## Next Search Branches
- branch: runtime-failure-boundary-fixtures
  files or folders: `src/domain-service-kit.js`, `src/runtime-kit.js`, `src/game-kit-composer.js`, `src/engine.js`, `tests/domain-service-kit-smoke.mjs`
  question: What is the smallest non-scout executable fixture set for namespace policy, install rollback, dependency parity, failed-tick lifetime, and metadata truth?
- branch: content-boundary-objective-fixtures
  files or folders: `src/index.js`, `src/reef-rescue-kit.js`, `src/fishing-kit.js`, content proof fixtures
  question: Should ReefRescue move, deprecate, or be compatibility-labeled, and what objective/content validation is required while it remains exported?
- branch: preset-runtime-identity
  files or folders: `src/fishing-kit.js`, `src/reef-rescue-kit.js`, runtime kit identity fixtures
  question: Should content-kit factories honor caller ids, reject custom ids, or expose explicit preset id ownership?
- branch: runtime-binding-ownership
  files or folders: `src/game-kit-composer.js`, `src/runtime-kit.js`, composer/runtime kit fixtures
  question: Should duplicate binding names reject by default, namespace by kit id, expose owners, or require explicit override metadata?
- branch: module-source-proof-boundary
  files or folders: ecosystem proof/state packets, sibling ProtoKits/Experiments proof paths, public CDN/raw URLs
  question: Which proof claims are distribution/module-source issues rather than runtime, composition, identity, or content-boundary hardening?

## Not Claimed
- This node does not fix bugs, add tests, edit source, edit public docs, promote ProtoKits, publish npm metadata, validate sibling fetched refs, fix public proof routes, prove runtime failure-boundary readiness, prove runtime identity/lifecycle readiness, prove composition-proof ownership readiness, prove content-boundary/objective readiness, prove proof-signal integrity readiness, or prove broad DSK promotion readiness.
