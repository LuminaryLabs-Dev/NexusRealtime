import {
  createEngine,
  createHazardFieldKit,
  createInputIntentKit,
  createRenderDescriptorKit,
  createRouteFieldKit,
  createScenarioDriverKit,
  createScenarioDurationKit,
  defineEvent,
  defineResource,
  defineRuntimeKit,
  HazardFieldState,
  InputIntentState,
  RenderDescriptorState,
  RouteFieldState,
  ScenarioDurationState
} from "../../src/index.js";

export const GAME_REVISION = "obvious-place-first-playable-001";

export const GAME_DATA = Object.freeze({
  id: "obvious-place",
  title: "Obvious Place: Signal Orchard",
  revision: GAME_REVISION,
  world: {
    width: 960,
    height: 540,
    safeMargin: 34,
    background: "#121512"
  },
  player: {
    start: { x: 90, y: 280 },
    speed: 245,
    radius: 14,
    pulseRadius: 74,
    pulseCooldownSeconds: 0.22,
    health: 3
  },
  objective: {
    requiredRelays: 3,
    extractMarkerId: "extract-cedar-gate"
  },
  duration: {
    seconds: 24,
    checkpoints: [
      { id: "half-light", atSeconds: 12 },
      { id: "last-lantern", atSeconds: 20 },
      { id: "storm-loss", atSeconds: 24 }
    ]
  },
  route: {
    markers: [
      { id: "start-root", kind: "start", x: 90, y: 280, radius: 34, label: "Start Root" },
      { id: "relay-moss", kind: "relay", x: 260, y: 170, radius: 36, label: "Moss Relay" },
      { id: "relay-bell", kind: "relay", x: 475, y: 360, radius: 36, label: "Bell Relay" },
      { id: "relay-cairn", kind: "relay", x: 685, y: 190, radius: 36, label: "Cairn Relay" },
      { id: "extract-cedar-gate", kind: "extract", x: 855, y: 290, radius: 48, label: "Cedar Gate" }
    ],
    corridors: [
      { id: "root-to-moss", from: "start-root", to: "relay-moss", width: 56 },
      { id: "moss-to-bell", from: "relay-moss", to: "relay-bell", width: 56 },
      { id: "bell-to-cairn", from: "relay-bell", to: "relay-cairn", width: 56 },
      { id: "cairn-to-gate", from: "relay-cairn", to: "extract-cedar-gate", width: 66 }
    ]
  },
  hazards: {
    seed: "obvious-place-static",
    bounds: { width: 960, height: 540, padding: 42 },
    baseSpeed: 82,
    maxHazards: 9,
    hazards: [
      { id: "static-01", x: 390, y: 105, vx: 42, vy: 64, radius: 18, damage: 1, kind: "static" },
      { id: "static-02", x: 590, y: 445, vx: -58, vy: -36, radius: 20, damage: 1, kind: "static" }
    ],
    spawnRules: [
      {
        id: "storm-static",
        intervalSeconds: 5.5,
        speed: 76,
        radius: 16,
        damage: 1,
        kind: "static",
        target: { x: 520, y: 280 },
        spreadRadians: 0.55
      }
    ]
  },
  visual: {
    palette: {
      ground: "#121512",
      corridor: "#263521",
      routeGlow: "#b8f07c",
      relayIdle: "#7f8f64",
      relayReady: "#f5dd79",
      extractLocked: "#5c6c59",
      extractOpen: "#b9f7f0",
      player: "#f7faf0",
      pulse: "rgba(245, 221, 121, 0.18)",
      hazard: "#d56c77",
      text: "#eef5e6"
    }
  }
});

export const ObviousPlaceState = defineResource("obviousPlace.state");
export const ObviousPlacePulse = defineEvent("obviousPlace.pulse");
export const ObviousPlaceRelayLit = defineEvent("obviousPlace.relayLit");
export const ObviousPlaceCompleted = defineEvent("obviousPlace.completed");
export const ObviousPlaceFailed = defineEvent("obviousPlace.failed");

function number(value, fallback) {
  const next = Number(value);
  return Number.isFinite(next) ? next : fallback;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function routeMarkerById(routeState, markerId) {
  return (routeState?.markers ?? []).find((marker) => marker.id === markerId) ?? null;
}

function createInitialState(config = GAME_DATA) {
  const relayIds = config.route.markers.filter((marker) => marker.kind === "relay").map((marker) => marker.id);
  return {
    id: config.id,
    title: config.title,
    revision: config.revision,
    status: "playing",
    statusReason: null,
    player: {
      x: number(config.player.start.x, 0),
      y: number(config.player.start.y, 0),
      radius: number(config.player.radius, 14),
      speed: number(config.player.speed, 220),
      health: number(config.player.health, 3)
    },
    relays: Object.fromEntries(relayIds.map((id) => [id, { id, lit: false }])),
    requiredRelays: Math.min(number(config.objective.requiredRelays, relayIds.length), relayIds.length),
    litCount: 0,
    score: 0,
    pulse: {
      activeSeconds: 0,
      cooldownSeconds: 0,
      sequence: 0,
      radius: number(config.player.pulseRadius, 72)
    },
    lastPulse: null,
    lastDamageFrame: -999,
    objectiveText: "Light 3 relays, then reach the cedar gate.",
    helpText: "Move with WASD/arrows. Pulse with Space. Restart with R.",
    frame: 0
  };
}

function buildComputedRenderDescriptor(config, gameState, routeState, hazardState, durationState) {
  const palette = config.visual.palette;
  const markerById = Object.fromEntries((routeState?.markers ?? []).map((marker) => [marker.id, marker]));
  const objects = [];

  for (const corridor of routeState?.corridors ?? []) {
    const from = markerById[corridor.from];
    const to = markerById[corridor.to];
    if (!from || !to) continue;
    objects.push({
      id: corridor.id,
      kind: "corridor",
      layer: "ground",
      from: { x: from.x, y: from.y },
      to: { x: to.x, y: to.y },
      width: corridor.width,
      color: palette.corridor
    });
  }

  for (const marker of routeState?.markers ?? []) {
    const relay = gameState.relays[marker.id];
    const isExtract = marker.kind === "extract";
    const extractOpen = isExtract && gameState.litCount >= gameState.requiredRelays;
    objects.push({
      id: marker.id,
      kind: marker.kind,
      layer: "marker",
      x: marker.x,
      y: marker.y,
      radius: marker.radius,
      label: marker.metadata?.label ?? marker.label ?? marker.id,
      color: relay?.lit ? palette.relayReady : extractOpen ? palette.extractOpen : isExtract ? palette.extractLocked : palette.relayIdle,
      active: marker.active !== false,
      lit: relay?.lit === true,
      open: extractOpen
    });
  }

  for (const hazard of hazardState?.hazards ?? []) {
    objects.push({
      id: hazard.id,
      kind: "hazard",
      layer: "hazard",
      x: hazard.x,
      y: hazard.y,
      radius: hazard.radius,
      color: palette.hazard
    });
  }

  objects.push({
    id: "player",
    kind: "player",
    layer: "actor",
    x: gameState.player.x,
    y: gameState.player.y,
    radius: gameState.player.radius,
    color: palette.player
  });

  if (gameState.pulse.activeSeconds > 0) {
    objects.push({
      id: `pulse-${gameState.pulse.sequence}`,
      kind: "pulse",
      layer: "effect",
      x: gameState.player.x,
      y: gameState.player.y,
      radius: gameState.pulse.radius,
      color: palette.pulse
    });
  }

  const secondsLeft = Math.max(0, number(durationState?.durationSeconds, config.duration.seconds) - number(durationState?.elapsedSeconds, 0));
  return {
    id: `${config.id}-render-descriptor`,
    revision: config.revision,
    frameId: gameState.frame,
    world: config.world,
    palette,
    objects,
    hud: {
      title: config.title,
      objective: gameState.objectiveText,
      help: gameState.helpText,
      score: gameState.score,
      relays: `${gameState.litCount}/${gameState.requiredRelays}`,
      health: gameState.player.health,
      secondsLeft: Math.ceil(secondsLeft),
      status: gameState.status,
      statusReason: gameState.statusReason
    },
    diagnostics: []
  };
}

function publishRenderDescriptor(world, config) {
  const gameState = world.getResource(ObviousPlaceState);
  if (!gameState) return;
  world.setResource(RenderDescriptorState, buildComputedRenderDescriptor(
    config,
    gameState,
    world.getResource(RouteFieldState),
    world.getResource(HazardFieldState),
    world.getResource(ScenarioDurationState)
  ));
}

function createComputedContentKit(config = GAME_DATA) {
  return defineRuntimeKit({
    id: `${config.id}-computed-content-kit`,
    requires: ["route-field", "hazard-field"],
    provides: ["computed-content", "render-descriptor"],
    resources: { RenderDescriptorState },
    initWorld({ world }) {
      world.setResource(RenderDescriptorState, buildComputedRenderDescriptor(
        config,
        createInitialState(config),
        { markers: config.route.markers, corridors: config.route.corridors },
        { hazards: config.hazards.hazards },
        { elapsedSeconds: 0, durationSeconds: config.duration.seconds }
      ));
    },
    install({ engine }) {
      engine.computedContent = {
        snapshot() {
          return structuredClone(engine.world.getResource(RenderDescriptorState));
        }
      };
    },
    metadata: {
      domain: "content.compute.render-descriptor",
      purpose: "Computes game content descriptors from data instead of hard-coded scene objects."
    }
  });
}

function createObviousPlaceGameplayKit(config = GAME_DATA) {
  function resetAll(world) {
    world.setResource(ObviousPlaceState, createInitialState(config));
  }

  function gameplaySystem(world) {
    const state = world.getResource(ObviousPlaceState);
    if (!state) return;

    const durationState = world.getResource(ScenarioDurationState);
    const input = world.getResource(InputIntentState)?.intent ?? { x: 0, y: 0, actions: {} };
    const delta = Math.max(0, number(world.__nexusClock?.delta, 1 / 60));
    const frame = number(world.__nexusClock?.frame, 0);

    if (input.actions?.restart) {
      resetAll(world);
      publishRenderDescriptor(world, config);
      return;
    }

    if (state.status !== "playing") {
      publishRenderDescriptor(world, config);
      return;
    }

    const next = structuredClone(state);
    next.frame = frame;
    next.pulse.cooldownSeconds = Math.max(0, next.pulse.cooldownSeconds - delta);
    next.pulse.activeSeconds = Math.max(0, next.pulse.activeSeconds - delta);

    const length = Math.hypot(number(input.x, 0), number(input.y, 0)) || 1;
    const axisX = Math.abs(number(input.x, 0)) > 0 ? number(input.x, 0) / length : 0;
    const axisY = Math.abs(number(input.y, 0)) > 0 ? number(input.y, 0) / length : 0;
    next.player.x = clamp(next.player.x + axisX * next.player.speed * delta, config.world.safeMargin, config.world.width - config.world.safeMargin);
    next.player.y = clamp(next.player.y + axisY * next.player.speed * delta, config.world.safeMargin, config.world.height - config.world.safeMargin);

    const routeState = world.getResource(RouteFieldState);
    if (input.actions?.primary && next.pulse.cooldownSeconds <= 0) {
      next.pulse.activeSeconds = 0.16;
      next.pulse.cooldownSeconds = number(config.player.pulseCooldownSeconds, 0.2);
      next.pulse.sequence += 1;
      next.lastPulse = { x: next.player.x, y: next.player.y, frame };
      world.emit(ObviousPlacePulse, next.lastPulse);

      const nearestRelay = (routeState?.markers ?? [])
        .filter((marker) => marker.kind === "relay" && next.relays[marker.id]?.lit !== true)
        .map((marker) => ({ marker, distance: Math.hypot(marker.x - next.player.x, marker.y - next.player.y) }))
        .sort((left, right) => left.distance - right.distance)[0];

      if (nearestRelay && nearestRelay.distance <= next.pulse.radius + nearestRelay.marker.radius) {
        next.relays[nearestRelay.marker.id] = { id: nearestRelay.marker.id, lit: true };
        next.litCount += 1;
        next.score += 100;
        next.objectiveText = next.litCount >= next.requiredRelays
          ? "Cedar gate is open. Reach the bright exit."
          : `Light ${next.requiredRelays - next.litCount} more relay${next.requiredRelays - next.litCount === 1 ? "" : "s"}.`;
        world.emit(ObviousPlaceRelayLit, { marker: nearestRelay.marker, litCount: next.litCount });
      }
    }

    const collisions = world.__nexusEngine?.hazardField?.checkCircle
      ? world.__nexusEngine.hazardField.checkCircle({ x: next.player.x, y: next.player.y, radius: next.player.radius })
      : [];
    if (collisions.length > 0 && frame - next.lastDamageFrame > 18) {
      next.player.health -= 1;
      next.lastDamageFrame = frame;
      next.score = Math.max(0, next.score - 25);
      if (next.player.health <= 0) {
        next.status = "failed";
        next.statusReason = "The static caught you.";
        world.emit(ObviousPlaceFailed, { reason: next.statusReason, state: next });
      }
    }

    const extract = routeMarkerById(routeState, config.objective.extractMarkerId);
    if (extract && next.litCount >= next.requiredRelays) {
      const distanceToExtract = Math.hypot(extract.x - next.player.x, extract.y - next.player.y);
      if (distanceToExtract <= extract.radius + next.player.radius) {
        next.status = "won";
        next.statusReason = "Signal carried through the obvious place.";
        next.score += 250 + Math.ceil(Math.max(0, number(durationState?.durationSeconds, 0) - number(durationState?.elapsedSeconds, 0)) * 10);
        world.emit(ObviousPlaceCompleted, { state: next });
      }
    }

    if (durationState?.completed && next.status === "playing") {
      next.status = "failed";
      next.statusReason = "The orchard went dark before extraction.";
      world.emit(ObviousPlaceFailed, { reason: next.statusReason, state: next });
    }

    world.setResource(ObviousPlaceState, next);
    publishRenderDescriptor(world, config);
  }

  return defineRuntimeKit({
    id: `${config.id}-gameplay-kit`,
    requires: ["input-intent", "route-field", "hazard-field", "scenario-duration", "render-descriptor"],
    provides: ["obvious-place-gameplay"],
    resources: { ObviousPlaceState },
    events: { ObviousPlacePulse, ObviousPlaceRelayLit, ObviousPlaceCompleted, ObviousPlaceFailed },
    systems: [{ phase: "resolve", system: gameplaySystem, name: "obviousPlaceGameplaySystem" }],
    initWorld({ world, engine }) {
      world.__nexusEngine = engine;
      world.setResource(ObviousPlaceState, createInitialState(config));
    },
    install({ engine }) {
      engine.obviousPlace = {
        reset() {
          engine.scenarioDuration?.reset?.();
          engine.hazardField?.reset?.();
          engine.inputIntent?.reset?.();
          resetAll(engine.world);
          publishRenderDescriptor(engine.world, config);
          return engine.obviousPlace.snapshot();
        },
        snapshot() {
          return structuredClone(engine.world.getResource(ObviousPlaceState));
        },
        renderSnapshot() {
          return structuredClone(engine.world.getResource(RenderDescriptorState));
        },
        isComplete() {
          return engine.world.getResource(ObviousPlaceState)?.status === "won";
        }
      };
    },
    metadata: {
      domain: "game.first-playable.obvious-place",
      purpose: "First playable gameplay rule kit composed from promoted NexusRealtime kits."
    }
  });
}

export function createObviousPlaceEngine(options = {}) {
  const config = options.config ?? GAME_DATA;
  return createEngine({
    kits: [
      createInputIntentKit({ id: `${config.id}-input` }),
      createRouteFieldKit({ id: `${config.id}-route`, routeFieldDataset: config.route }),
      createHazardFieldKit({ id: `${config.id}-hazards`, hazardFieldDataset: config.hazards }),
      createScenarioDurationKit({
        id: `${config.id}-duration`,
        durationSeconds: config.duration.seconds,
        checkpoints: config.duration.checkpoints
      }),
      createScenarioDriverKit({ id: `${config.id}-driver` }),
      createRenderDescriptorKit({ id: `${config.id}-render-base` }),
      createComputedContentKit(config),
      createObviousPlaceGameplayKit(config)
    ]
  });
}

export function getNextObjective(engine) {
  const game = engine.obviousPlace.snapshot();
  const route = engine.routeField.getState();
  const relayTarget = (route.markers ?? []).find((marker) => marker.kind === "relay" && game.relays[marker.id]?.lit !== true);
  if (relayTarget) return relayTarget;
  return (route.markers ?? []).find((marker) => marker.id === GAME_DATA.objective.extractMarkerId) ?? null;
}

export function runAutoplayValidation(options = {}) {
  const engine = createObviousPlaceEngine(options);
  const maxFrames = options.maxFrames ?? 360;
  const delta = options.delta ?? 1 / 30;
  let pulsedThisTarget = null;

  for (let frame = 0; frame < maxFrames; frame += 1) {
    const game = engine.obviousPlace.snapshot();
    if (game.status !== "playing") break;

    const target = getNextObjective(engine);
    if (!target) break;

    const distance = Math.hypot(target.x - game.player.x, target.y - game.player.y);
    const intent = engine.scenarioDriver.steerToward(game.player, target, { boostDistance: 200 });
    const shouldPulse = target.kind === "relay" && distance <= game.pulse.radius * 0.82 && pulsedThisTarget !== target.id;
    engine.inputIntent.set({
      x: distance > 8 ? intent.x : 0,
      y: distance > 8 ? intent.y : 0,
      primary: shouldPulse,
      restart: false
    }, { source: "autoplay-validation", target: target.id });
    if (shouldPulse) pulsedThisTarget = target.id;
    engine.tick(delta);
  }

  return {
    game: engine.obviousPlace.snapshot(),
    render: engine.obviousPlace.renderSnapshot(),
    route: engine.routeField.snapshot(),
    hazards: engine.hazardField.snapshot(),
    duration: engine.scenarioDuration.snapshot(),
    input: engine.inputIntent.snapshot()
  };
}

const isNodeCli = typeof process !== "undefined" &&
  Array.isArray(process.argv) &&
  process.argv[1] &&
  import.meta.url === `file://${process.argv[1]}`;

if (isNodeCli) {
  const result = runAutoplayValidation();
  console.log(JSON.stringify({
    revision: GAME_REVISION,
    status: result.game.status,
    score: result.game.score,
    relays: result.game.litCount,
    frameId: result.render.frameId,
    objects: result.render.objects.length
  }, null, 2));
}
