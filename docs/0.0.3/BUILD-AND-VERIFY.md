# Build And Verify

Use this to verify the core capability-domain rebuild.

## Main repo verification

```txt
npm install
npm test
```

## Direct smoke tests

```txt
node tests/public-api-freeze.mjs
node tests/core-capability-domain-barrels-smoke.mjs
```

## What should pass

```txt
public-api-freeze ok
core capability domain barrel smoke ok
Passed 10 smoke tests.
```

## Migration verification for downstream apps

```txt
1. Pull latest NexusRealtime main.
2. Search for old imports:
   grep -R "createInputIntentKit\|createRenderDescriptorKit\|createTelemetryKit" src apps examples
3. Update imports using docs/0.0.3/IMPORT-MIGRATION-MAP.md.
4. Run the downstream app smoke command.
5. Record failures in the app migration issue.
```

## Common failures

```txt
Missing export:
  App is using an old flat import after compatibility was removed.

Missing engine namespace:
  App still expects engine.inputIntent instead of engine.n.coreInput.

Missing config field:
  App passed old kit-specific config into a broader core capability factory.
```

## Rule

Do not remove compatibility until this doc has been used to verify both NexusRealtime and at least one downstream app migration path.
