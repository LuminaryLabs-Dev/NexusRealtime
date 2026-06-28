# Core Promotion Gates

A capability domain cannot become core until it has evidence.

## Required gate

```txt
[ ] boundary doc exists
[ ] how-to-use doc exists
[ ] source-local core-domain.md exists
[ ] default config smoke passes
[ ] custom config smoke passes
[ ] snapshot/reset proof exists
[ ] serializable state proof exists
[ ] deterministic event proof exists
[ ] no forbidden browser/runtime dependency leaks into core
[ ] migration note exists if an old public API changes
```

## Forbidden core runtime patterns

Core domains should not depend on hidden wall-clock or browser-only APIs unless that code is inside an explicit adapter boundary.

```txt
Date.now
performance.now
Math.random
crypto.getRandomValues
requestAnimationFrame
document
HTMLCanvasElement
WebGL
AudioContext
PointerEvent
```

## Current proof files

```txt
tests/core-capability-domain-barrels-smoke.mjs
tests/public-api-freeze.mjs
tests/run-all.mjs
src/foundation/promotion-guard.js
```

## Rule

```txt
No boundary doc, no core.
No smoke test, no core.
No snapshot/reset, no core.
No migration note for breaking API changes, no break.
```
