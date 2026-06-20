# Knowledge Nodes: dsk_architecture_scout 2026-06-20T03-23-42-0400

## Root Lesson
- id: dsk-runtime-identity-lifecycle-context-root-2026-06-20-0323
- statement: DSK remains release-aligned and smoke-green, but fresh runtime identity/lifecycle evidence adds binding ownership, ECS definition identity, SequenceNode install-only idempotency, and event-bus disposed parity as later hardening inventory without replacing runtime failure-boundary.
- why it matters: Large DSK and ProtoKit graphs can appear valid while service bindings overwrite silently, same-named ECS definitions share state, repeated proof deployments replay install-only side effects, or disposed event buses keep listeners. Those risks harm composition trust, but base namespace/install/dependency hardening still comes first.

## Child Nodes
- id: dsk-release-aligned-still-context-2026-06-20-0323
  parent: dsk-runtime-identity-lifecycle-context-root-2026-06-20-0323
  lesson: Core still matches the preflight-resolved latest release branch and passes the existing smoke suite.
  evidence: `npm run automation:preflight` resolved `latestReleaseBranch: 0.0.2`; `HEAD` and `origin/0.0.2` both resolved to `96a0c16340c50832cdb5c4c81101b87b3f0c6fa0`; ahead/behind was `0 0`; `npm test` passed 8 smoke tests.
  look further: Keep resolving latest release branch every run and treat old packet commit hashes as context only.
- id: dsk-runtime-failure-boundary-first-2026-06-20-0323
  parent: dsk-runtime-identity-lifecycle-context-root-2026-06-20-0323
  lesson: Namespace safety, install transaction semantics, dependency parity, scheduler failed-tick lifetime, and metadata truth remain tranche 1.
  evidence: Focused probe returned inherited `__proto__` API marker with no own key, retained failed API-collision DSK metadata plus false same-object reinstall success, and direct install of missing `runtime:missing`; source evidence remains `src/domain-service-kit.js:143-161`, `src/runtime-kit.js:135-215`, and `src/game-kit-composer.js:49-76`.
  look further: Write fixtures for reserved keys, null-prototype or own-key policy, rollback/preflight, dependency parity, failed-tick cleanup/diagnostics, and reset/snapshot/async metadata truth.
- id: dsk-runtime-identity-lifecycle-later-2026-06-20-0323
  parent: dsk-runtime-identity-lifecycle-context-root-2026-06-20-0323
  lesson: Binding ownership, ECS definition identity, SequenceNode install-only idempotency, and disposed event-bus listener parity are a distinct hardening tranche after base failure-boundary work begins.
  evidence: Focused probe found composer and engine binding `service` came from second kit `binding-b`, same-named component/resource/event definitions read A data through B definitions, raw install-only SequenceNode kit installed twice while `engine.kits` stayed empty, and disposed event bus accepted `onAny()` with `anyListenerCount:1`; source evidence includes `src/game-kit-composer.js:17-24`, `src/runtime-kit.js:150-155`, `src/ecs.js:17-26`, `src/ecs.js:101-110`, `src/ecs.js:167-259`, `src/sequence-node-kit.js:40-69`, and `src/sequence-node.js:183-233`.
  look further: Add fixtures for duplicate binding policy, explicit shared ECS definition policy, install-only kit installed-state records, and disposed listener parity.
- id: dsk-composition-proof-ownership-still-later-2026-06-20-0323
  parent: dsk-runtime-identity-lifecycle-context-root-2026-06-20-0323
  lesson: Duplicate provider ownership, SequenceNode type policy, event-history isolation, and AR runtime-source consistency remain separate composition-proof rows.
  evidence: Prior DSK node `2026-06-20T02-23-35-0400` plus current source/probe evidence keep duplicate type overwrite and event-history mutability live; neighboring nodes keep provider ownership and AR source consistency as hardening inventory.
  look further: Add provider owner diagnostics, explicit provider/type override policy, clone/freeze event history, and AR support/session reconciliation after tranche 1 starts.
- id: dsk-module-source-regression-separate-2026-06-20-0323
  parent: dsk-runtime-identity-lifecycle-context-root-2026-06-20-0323
  lesson: Public/local/fetched DSK proof remains a module-source strategy blocker, not DSK runtime hardening evidence.
  evidence: Ecosystem state node `2026-06-20T03-07-30-0400` and ecosystem proof node `2026-06-20T02-40-59-0400` keep ProtoKits package resolution, Experiments targeted proof, public `Booting...`, npm 404, and package-version policy separate from runtime and composition hardening.
  look further: Let ecosystem/proof lanes choose one package/workspace/CDN/same-origin/build-step import-map model.
- id: dsk-core-boundary-preserved-2026-06-20-0323
  parent: dsk-runtime-identity-lifecycle-context-root-2026-06-20-0323
  lesson: Runtime identity rows are core validation-surface candidates, while reusable gameplay implementations and browser proof routing still belong outside core.
  evidence: `docs/how-to-protokit.md:7-15`, `docs/how-to-protokit.md:53-68`, and `docs/how-to-protokit.md:99-105` keep core focused on runtime, ECS, scheduler, DSK contract, composer, stable primitives, and validation invariants.
  look further: Route implementation kits to ProtoKits and playable/browser proof to Experiments unless the work is a true core invariant.

## Related Nodes
- source: `state/automation/dsk_architecture_scout/knowledge_nodes/2026-06-20T02-23-35-0400-dsk-architecture-node.md`
- relationship: supersedes
- reason: Preserves runtime failure-boundary and composition-proof ownership while adding runtime identity/lifecycle rows.
- source: `state/automation/deep_bug_report_scout/knowledge_nodes/2026-06-20T02-54-27-0400-deep-bug-node.md`
- relationship: extends
- reason: Adds binding overwrite, ECS definition identity, install-only SequenceNode idempotency, and disposed `onAny()` parity as DSK promotion-adjacent validation inventory.
- source: `state/automation/domain_kit_idea_expander/knowledge_nodes/2026-06-20T03-01-44-0400-domain-kit-idea-node.md`
- relationship: confirms
- reason: Maps the newest deep-bug evidence to Runtime Identity And Lifecycle Ownership instead of duplicating composition proof or module-source families.
- source: `state/automation/ecosystem_state_scout/knowledge_nodes/2026-06-20T03-07-30-0400-ecosystem-state-node.md`
- relationship: constrains
- reason: Keeps public/local/fetched module-source proof blocker separate from runtime and composition hardening.
- source: `state/automation/ecosystem_proof_scout/knowledge_nodes/2026-06-20T02-40-59-0400-ecosystem-proof-node.md`
- relationship: constrains
- reason: Separates local, fetched-ref, targeted, browser, npm, package-version, hardening, composition, and proof-signal claims.

## Next Search Branches
- branch: runtime-failure-boundary-fixtures
  files or folders: `src/domain-service-kit.js`, `src/runtime-kit.js`, `src/game-kit-composer.js`, `src/engine.js`, `tests/domain-service-kit-smoke.mjs`
  question: What is the smallest non-scout executable fixture set for namespace policy, install rollback, dependency parity, failed-tick lifetime, and metadata truth?
- branch: runtime-binding-ownership
  files or folders: `src/game-kit-composer.js`, `src/runtime-kit.js`, composer/runtime kit fixtures
  question: Should duplicate binding names reject by default, namespace by kit id, expose owners, or require explicit override metadata?
- branch: ecs-definition-identity-policy
  files or folders: `src/ecs.js`, `src/runtime-kit.js`, DSK validation fixtures
  question: Should same-named component/resource/event definitions across kits be treated as shared identity only when explicitly declared?
- branch: sequence-install-only-idempotency
  files or folders: `src/sequence-node-kit.js`, `src/sequence-node.js`, SequenceNode deploy fixtures
  question: How should raw install-only SequenceNode kits record installed state, skip repeats, and handle failed installs?
- branch: event-bus-disposed-parity
  files or folders: `src/sequence-node.js`, event-bus lifecycle fixtures
  question: Should every listener registration API reject after dispose and keep listener counts immutable?
- branch: module-source-proof-boundary
  files or folders: ecosystem proof/state packets, sibling ProtoKits/Experiments proof paths, public CDN/raw URLs
  question: Which proof claims are distribution/module-source issues rather than runtime or composition hardening?

## Not Claimed
- This node does not fix bugs, add tests, edit source, edit public docs, promote ProtoKits, publish npm metadata, validate sibling fetched refs, fix public proof routes, prove runtime failure-boundary readiness, prove runtime identity/lifecycle readiness, prove composition-proof ownership readiness, prove proof-signal integrity readiness, or prove broad DSK promotion readiness.
