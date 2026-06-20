# Knowledge Nodes: dsk_architecture_scout 2026-06-19T15-25-28-0400

## Root Lesson
- id: dsk-hardening-boundary-split-root-2026-06-19-1525
- statement: DSK remains release-aligned and test-green, but the next useful architecture state is a boundary split: core runtime failure-boundary fixtures first, downstream experience-edge proof rows later, and public module-source proof separately.
- why it matters: Live probes reconfirm base DSK/scheduler hardening gaps on the current release head, while newest neighboring lanes add domain edge-contract bugs that are real proof inputs but should not displace the immediate non-scout runtime hardening fixture handoff.

## Child Nodes
- id: dsk-release-aligned-still-context-2026-06-19-1525
  parent: dsk-hardening-boundary-split-root-2026-06-19-1525
  lesson: Core still matches the preflight-resolved latest release branch and passes the existing smoke suite.
  evidence: `npm run automation:preflight` resolved `latestReleaseBranch: 0.0.2`; `HEAD` and `origin/0.0.2` both resolved to `96a0c16340c50832cdb5c4c81101b87b3f0c6fa0`; ahead/behind was `0 0`; `npm test` passed 8 smoke tests.
  look further: Keep resolving latest release branch every run and treat old packet commit hashes as context only.
- id: dsk-runtime-failure-boundary-still-open-2026-06-19-1525
  parent: dsk-hardening-boundary-split-root-2026-06-19-1525
  lesson: Namespace safety, install transaction, dependency parity, and scheduler failure lifetime remain the first executable hardening target.
  evidence: Live probe returned inherited `__proto__` API marker with no own key, retained failed API-collision DSK metadata plus false same-object reinstall success, direct install of missing `runtime:missing`, and failed-tick event replay with the recovery tick; source evidence remains `src/domain-service-kit.js:143-161`, `src/runtime-kit.js:135-157`, `src/runtime-kit.js:214-215`, `src/game-kit-composer.js:49-76`, `src/engine.js:220-238`, and `src/surfaces.js:30-38`.
  look further: Write fixtures for reserved keys, null-prototype or own-key policy, rollback/preflight, dependency parity, and failed-tick cleanup/diagnostics.
- id: dsk-metadata-truth-gap-2026-06-19-1525
  parent: dsk-hardening-boundary-split-root-2026-06-19-1525
  lesson: DSK async-ready, reset, snapshot, and serializable-state metadata still needs tests that prove whether each claim is enforced or explicitly metadata-only.
  evidence: `src/domain-service-kit.js:131-139` records execution metadata and `README.md:136-140` says async execution is future capability, while existing smoke tests only cover a happy-path serializable snapshot.
  look further: Add absence/failure/non-serializable/restore/reset fixtures before replay, worker, network, or long-session claims.
- id: dsk-experience-edge-downstream-2026-06-19-1525
  parent: dsk-hardening-boundary-split-root-2026-06-19-1525
  lesson: Experience-edge bugs should join downstream proof inventory after base runtime failure-boundary fixtures begin, not broaden this scout lane's immediate root.
  evidence: Neighboring deep bug node `2026-06-19T14-54-04-0400` and live source scans show repeated CharacterRagdoll `Staggered` receipts, AR launch selected-mode start without fallback loop, RealismKit custom quality fallback to built-in profiles, and FishingKit empty content fallback/placeholder state; docs map these to `Experience Edge Contract` rows.
  look further: Bundle recovery receipts, launch fallback, quality profiles, and content dataset contracts as a second fixture tranche.
- id: dsk-proof-boundary-separation-2026-06-19-1525
  parent: dsk-hardening-boundary-split-root-2026-06-19-1525
  lesson: Runtime hardening proof, experience-edge proof, public browser proof, fetched-ref sibling proof, aggregate proof, npm metadata, and package-version policy remain separate evidence categories.
  evidence: Ecosystem state node `2026-06-19T15-10-04-0400` and ecosystem proof node `2026-06-19T14-41-14-0400` keep module-source strategy as the public/fetched-ref blocker while DSK runtime failure-boundary rows remain separate.
  look further: Do not let HTTP 200, local green tests, or public raw/CDN reachability stand in for DSK hardening proof.

## Related Nodes
- source: `state/automation/dsk_architecture_scout/knowledge_nodes/2026-06-19T14-24-17-0400-dsk-architecture-node.md`
- relationship: supersedes
- reason: Preserves runtime failure-boundary root while splitting downstream edge-contract and public proof categories.
- source: `state/automation/deep_bug_report_scout/knowledge_nodes/2026-06-19T13-53-17-0400-deep-bug-node.md`
- relationship: confirms
- reason: Supplies the DSK/scheduler failure-boundary bug evidence reconfirmed by live probe.
- source: `state/automation/deep_bug_report_scout/knowledge_nodes/2026-06-19T14-54-04-0400-deep-bug-node.md`
- relationship: extends
- reason: Adds experience-edge proof rows that should remain downstream of base DSK hardening.
- source: `state/automation/domain_kit_idea_expander/knowledge_nodes/2026-06-19T15-00-41-0400-domain-kit-idea-node.md`
- relationship: expands
- reason: Converts edge bugs into planning inventory without replacing runtime failure-boundary fixtures.
- source: `state/automation/ecosystem_state_scout/knowledge_nodes/2026-06-19T15-10-04-0400-ecosystem-state-node.md`
- relationship: constrains
- reason: Keeps public/fetched-ref module-source proof separate from runtime hardening.
- source: `state/automation/ecosystem_proof_scout/knowledge_nodes/2026-06-19T14-41-14-0400-ecosystem-proof-node.md`
- relationship: constrains
- reason: Confirms local proof, fetched-ref proof, public browser proof, aggregate proof, and hardening proof are separate.

## Next Search Branches
- branch: runtime-failure-boundary-fixtures
  files or folders: `src/domain-service-kit.js`, `src/runtime-kit.js`, `src/game-kit-composer.js`, `src/engine.js`, `src/ecs.js`, `tests/domain-service-kit-smoke.mjs`
  question: What is the smallest non-scout executable fixture set for namespace policy, install rollback, dependency parity, and failed-tick event lifetime?
- branch: metadata-truth-fixtures
  files or folders: `src/domain-service-kit.js`, `tests/domain-service-kit-smoke.mjs`, future hardening tests
  question: Which reset, snapshot, serialization, and async-ready claims are enforced versus metadata-only?
- branch: experience-edge-proof-tranche
  files or folders: `src/character-ragdoll-kit.js`, `src/ar-launcher.js`, `src/realism-kit.js`, `src/fishing-kit.js`, edge proof fixtures
  question: Which recovery, launch, quality, and content rows belong after base DSK hardening starts?
- branch: proof-boundary-separation
  files or folders: sibling ProtoKits/Experiments proof files, public routes, npm metadata, package metadata
  question: Which proof claims are runtime hardening, which are domain edge proof, and which are distribution/module-source proof?

## Not Claimed
- This node does not fix bugs, add tests, edit source, edit public docs, promote ProtoKits, publish npm metadata, validate sibling fetched refs, fix public proof routes, or prove browser-complete public DSK proof.
