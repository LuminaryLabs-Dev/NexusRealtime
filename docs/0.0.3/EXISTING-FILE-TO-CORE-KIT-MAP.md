# Existing File To Core Kit Map

This inventory maps existing flat `src/*.js` kit files into the new capability-domain structure.

## Seed mappings

```txt
src/input-intent-kit.js
  -> src/core-kits/core-input-kit/index.js
  status: re-exported seed

src/render-descriptor-kit.js
  -> src/core-kits/core-graphics-kit/index.js
  status: re-exported seed

src/interaction-target-kit.js
  -> src/core-kits/core-interaction-kit/index.js
  status: re-exported seed

src/timing-window-kit.js
  -> src/core-kits/core-simulation-kit/index.js
  status: re-exported seed

src/resource-pressure-kit.js
  -> src/core-kits/core-simulation-kit/index.js
  status: re-exported seed; later split into resources and pressure modules

src/objective-flow-kit.js
  -> src/core-kits/core-simulation-kit/index.js
  status: re-exported seed

src/telemetry-kit.js
  -> src/core-kits/core-diagnostics-kit/index.js
  status: re-exported seed
```

## Classification rule

```txt
kernel     = engine internals
contracts  = kit/DSK/composer contracts
foundation = deterministic primitives
core-kits  = configurable capability domains
adapters   = renderer/platform/storage/network/model boundaries
legacy     = old flat or domain-specific kits pending migration/removal
```

## Breaking migration rule

Old flat imports may be removed in a future `refactor!` commit only after:

```txt
[ ] this map is updated
[ ] IMPORT-MIGRATION-MAP.md is updated
[ ] BREAKING-CHANGES.md is updated
[ ] BUILD-AND-VERIFY.md proves the new path
```
