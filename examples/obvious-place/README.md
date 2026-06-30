# Obvious Place: Signal Orchard

`Obvious Place: Signal Orchard` is a complete first playable browser game built as an isolated NexusRealtime example.

## Game brief

| Field | Value |
|---|---|
| Title | Obvious Place: Signal Orchard |
| Genre | Single-screen top-down extraction runner |
| Camera | Fixed orthographic canvas view |
| Player fantasy | You are a small signal courier crossing a dark orchard and lighting obvious focus points before the path collapses. |
| Core loop | Move to relay, pulse to light it, repeat three times, then extract through the cedar gate. |
| Controls | WASD/arrows move, Space pulses, R restarts. |
| World | One readable data-driven orchard field with route corridors, relay markers, drifting static hazards, and one extraction gate. |
| Main mechanic | Pulse near a relay to light it. |
| Secondary mechanic | Avoid moving static while racing the duration pressure. |
| Enemies/obstacles | Drifting static hazards and a 24-second darkness timer. |
| Goal | Light 3 relays and reach the cedar gate. |
| Fail state | Health reaches zero or the pressure timer expires. |
| Progression | Each relay opens the next decision point, then unlocks extraction. |
| Visual style | Procedural canvas shapes, muted forest tones, glowing route/signals. |
| Audio style | No audio in this first playable, keeping the proof dependency-free. |
| No-go list | No external assets, no CDN, no menus, no one-off engine bypass. |

## Kit composition

```txt
createInputIntentKit
createRouteFieldKit
createHazardFieldKit
createScenarioDurationKit
createScenarioDriverKit
createRenderDescriptorKit
obvious-place-computed-content-kit
obvious-place-gameplay-kit
```

The browser page is only a host adapter. Game content and runtime state are deployed through kits and data-driven descriptor computation.

## Files

```txt
examples/obvious-place/game-snapshot.mjs
  Data, kit composition, computed render descriptors, gameplay state, and autoplay validation.

examples/obvious-place/index.html
  One-page local browser host using the NexusRealtime game snapshot.

examples/obvious-place/README.md
  Game brief, controls, validation, and file map.

../../tests/obvious-place-first-playable-smoke.mjs
  Headless smoke proving page contract, kit graph, player movement, and core-loop completion.
```

## Run locally

From the repository root:

```bash
node examples/obvious-place/game-snapshot.mjs
node tests/obvious-place-first-playable-smoke.mjs
npm test
```

Open the page directly or through any local static server:

```txt
examples/obvious-place/index.html
```

## Validation meaning

Passing the smoke test proves:

- The page references the local game module.
- The page has no external HTTP imports/assets.
- The game installs through the expected NexusRealtime kit graph.
- The player moves through normalized input intent.
- The main pulse action lights relays.
- The autoplay driver can complete the full objective before fail pressure expires.
