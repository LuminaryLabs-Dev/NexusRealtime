# Knowledge Nodes: dsk_architecture_scout 2026-06-19T05-40-58-0400

## Root Lesson
- id: dsk-fixture-plan-ready-root-2026-06-19-0540
- statement: Current `origin/0.0.2` has advanced to `96a0c16340c50832cdb5c4c81101b87b3f0c6fa0` and remains test-green, but live probes reconfirm DSK promotion is blocked by one concrete hardening fixture plan across namespace, install, dependency, state-contract, service-call, and operations data invariants.
- why it matters: The evidence is stable across the release-head change. Another scout packet is lower value than turning the repeated findings into executable fixtures and then hardening source behavior in a non-scout lane.

## Child Nodes
- id: dsk-release-head-drift-revalidated-2026-06-19-0540
  parent: dsk-fixture-plan-ready-root-2026-06-19-0540
  lesson: Older DSK packets cited `aba770f25e9ac0dcb5f440c3f79ae7140f0a8c0a`, but the current latest release head is `96a0c16340c50832cdb5c4c81101b87b3f0c6fa0`.
  evidence: `npm run automation:preflight`, `git rev-parse HEAD origin/0.0.2`, and `git rev-list --left-right --count HEAD...origin/0.0.2` all show current branch `0.0.2` aligned with `origin/0.0.2` at `96a0c16340c50832cdb5c4c81101b87b3f0c6fa0`.
  look further: Keep resolving latest release branch every run and treat prior packet commit hashes as context, not authority.
- id: dsk-namespace-transaction-dependency-gap-2026-06-19-0540
  parent: dsk-fixture-plan-ready-root-2026-06-19-0540
  lesson: The current release head still has namespace, failed-install transaction, and direct dependency parity blockers.
  evidence: `src/domain-service-kit.js:143-161` uses a normal object namespace and late API assignment; `src/runtime-kit.js:135-157` records DSK metadata and kit list entries before late install hooks; `src/runtime-kit.js:142-145` only filters missing `n:` requires; focused probe returned `own:false` for `__proto__`, retained `n-late-collision-kit` after collision, and installed a DSK requiring missing `runtime:needed`.
  look further: Implement fixtures for reserved API names, install rollback, and direct-install dependency policy before adding new DSK claims.
- id: dsk-state-service-policy-gap-2026-06-19-0540
  parent: dsk-fixture-plan-ready-root-2026-06-19-0540
  lesson: DSK promotion still needs state/service fixtures for reset, one-shot completion, finite config, and time policy.
  evidence: `src/domain-service-kit.js:131-139` keeps reset/snapshot/async as metadata; probes returned `objectiveCompletionBatches:3` and `ScheduleKit` `elapsedSeconds:"NaN"` with `scale:"fast"`.
  look further: Add promoted-domain fixtures for reset/snapshot policy, completion idempotency, time catch-up, and config normalization.
- id: dsk-operations-data-integrity-gap-2026-06-19-0540
  parent: dsk-fixture-plan-ready-root-2026-06-19-0540
  lesson: Operations domains remain blocked by immutable config, stable identity, finite transaction, and restored-state consistency gaps.
  evidence: Probes confirmed OccupantFlow reset reused mutated spawn-rule timing, generated ids duplicated `occupant-1`, Facility/Economy committed non-finite ledger state, and ResourcePressure exposed contradictory depletion flags; source lines in `src/occupant-flow-kit.js`, `src/facility-operations-kit.js`, `src/economy-kit.js`, and `src/resource-pressure-kit.js` match those paths.
  look further: Add fixtures for immutable authored data, collision-free generated ids, finite ledger mutation gates, and initial/restored aggregate-state consistency.
- id: dsk-fixture-plan-over-more-scouting-2026-06-19-0540
  parent: dsk-fixture-plan-ready-root-2026-06-19-0540
  lesson: The next highest-value work is a smallest executable fixture plan, not additional expansion inventory.
  evidence: Current packet, `2026-06-19T02-24-48-0400`, `2026-06-19T01-24-20-0400`, and neighboring bug/idea nodes all converge on the same blocker set while `npm test` still passes.
  look further: Use a non-scout lane to write failing/pending fixtures first, then harden `domain-service-kit`, `runtime-kit`, composer/direct install policy, and selected promoted-domain kits.

## Related Nodes
- source: `state/automation/dsk_architecture_scout/knowledge_nodes/2026-06-19T02-24-48-0400-dsk-architecture-node.md`
- relationship: supersedes
- reason: Preserves the operations data integrity root but revalidates it on the newer current release head and narrows the next action to a fixture plan.
- source: `state/automation/deep_bug_report_scout/knowledge_nodes/2026-06-19T01-53-53-0400-deep-bug-node.md`
- relationship: confirms
- reason: Runtime operations bugs remain directly relevant to DSK promotion fixture requirements.
- source: `state/automation/domain_kit_idea_expander/knowledge_nodes/2026-06-19T02-02-08-0400-domain-kit-idea-node.md`
- relationship: constrains
- reason: Operations data integrity ideas should stay advisory until executable fixtures exist.
- source: `state/automation/ecosystem_proof_scout/knowledge_nodes/2026-06-19T01-44-00-0400-ecosystem-proof-node.md`
- relationship: constrains
- reason: Local/raw proof and public browser proof remain separate from DSK architecture hardening readiness.
- source: `state/automation/ecosystem_state_scout/knowledge_nodes/2026-06-19T01-11-04-0400-ecosystem-state-node.md`
- relationship: constrains
- reason: Branch alignment and validation-green status remain separate from npm availability, browser proof, and promotion policy.

## Next Search Branches
- branch: DSK promotion hardening fixture plan
- files or folders: `src/domain-service-kit.js`, `src/runtime-kit.js`, `src/game-kit-composer.js`, `tests/domain-service-kit-smoke.mjs`, selected domain smoke coverage
- question: What is the smallest executable fixture set that locks namespace, install rollback, direct dependency policy, reset/snapshot contract, service-call policy, and operations data invariants?
- branch: DSK install transaction fixture
- files or folders: `src/runtime-kit.js`, `src/domain-service-kit.js`, `tests/domain-service-kit-smoke.mjs`
- question: Which install stages must preflight or rollback so failed DSK installs leave no metadata, bindings, kit entries, registries, systems, sequence nodes, or namespace APIs?
- branch: DSK operations data integrity gates
- files or folders: `src/occupant-flow-kit.js`, `src/facility-operations-kit.js`, `src/economy-kit.js`, `src/resource-pressure-kit.js`
- question: Which immutable-config, stable-id, finite-transaction, and restored-state fixtures must pass before operations domains are promoted as DSKs?

## Not Claimed
- This node does not fix source, add tests, update public docs, promote ProtoKits, publish npm metadata, clean sibling worktrees, or prove browser-complete public DSK proof.
