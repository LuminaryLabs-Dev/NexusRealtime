# Core Rebuild Release Checklist

Use this before removing old flat import compatibility.

```txt
[ ] START-HERE.md exists
[ ] CORE-CAPABILITY-KITS.md exists
[ ] CORE-KIT-OVERRIDE-MODEL.md exists
[ ] EXISTING-FILE-TO-CORE-KIT-MAP.md exists
[ ] PROTOKIT-BOUNDARIES.md exists
[ ] PROMOTION-GATES.md exists
[ ] BREAKING-CHANGES.md exists
[ ] APP-MIGRATION-GUIDE.md exists
[ ] IMPORT-MIGRATION-MAP.md exists
[ ] BUILD-AND-VERIFY.md exists
[ ] source folders exist
[ ] core domain factories export from src/index.js
[ ] foundation primitives export from src/index.js
[ ] tests/public-api-freeze.mjs passes
[ ] tests/core-capability-domain-barrels-smoke.mjs passes
[ ] npm test passes
[ ] downstream app migration packet is complete
[ ] satellite repos remain untouched in this phase
```

## Final breaking commit rule

The final compatibility-removal commit must be marked as breaking:

```txt
refactor!: remove old flat import compatibility
```
