# Core Kits Docs

This folder documents the public-facing side of NexusRealtime core capability domains.

The source-local contracts live under:

```txt
src/core-kits/<core-kit>/core-domain.md
```

The canonical rebuild docs live under:

```txt
docs/0.0.3/
```

## Core capability domains

```txt
core-data-kit
core-persistence-kit
core-assets-kit
core-platform-kit
core-input-kit
core-spatial-kit
core-scene-kit
core-physics-kit
core-motion-kit
core-simulation-kit
core-interaction-kit
core-graphics-kit
core-camera-kit
core-animation-kit
core-audio-kit
core-ui-kit
core-network-kit
core-diagnostics-kit
core-policy-kit
core-composition-kit
core-mlnn-kit
core-agent-kit
```

## Current implementation pass

```txt
[x] source folders created
[x] source-local core-domain docs created
[x] shared core capability factory added
[x] first umbrella factories added
[x] foundation primitives added
[x] public exports added
[x] smoke test added
[ ] individual public how-to docs expanded
[ ] old flat import compatibility removed
```

## Public API example

```js
import {
  createRealtimeGame,
  createCoreDataKit,
  createCoreInputKit,
  createCoreGraphicsKit,
  createCoreSimulationKit,
  createCoreDiagnosticsKit,
  createCoreMLNNKit,
  createCoreAgentKit
} from "nexusrealtime";

const engine = createRealtimeGame({
  kits: [
    createCoreDataKit(),
    createCoreInputKit(),
    createCoreGraphicsKit(),
    createCoreSimulationKit(),
    createCoreDiagnosticsKit(),
    createCoreMLNNKit({ models: [{ id: "mock", kind: "mock" }] }),
    createCoreAgentKit({ agents: [{ id: "builder-agent" }] })
  ]
});
```

## Next docs to expand

Each domain should eventually receive:

```txt
docs/core-kits/<core-kit>.md
docs/core-kits/how-to-use-<core-kit>.md
```

The source-local `core-domain.md` files are the first implementation proof that the folder contracts exist.
