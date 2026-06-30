import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import {
  createObviousPlaceEngine,
  GAME_REVISION,
  runAutoplayValidation
} from "../examples/obvious-place/game-snapshot.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..");
const html = readFileSync(resolve(repoRoot, "examples/obvious-place/index.html"), "utf8");

assert.match(html, /<canvas id="game"/, "browser page should expose a local canvas viewport");
assert.match(html, /\.\/game-snapshot\.mjs/, "browser page should load the NexusRealtime game snapshot module");
assert.doesNotMatch(html, /https?:\/\//, "first playable must not use external assets or CDN imports");

const engine = createObviousPlaceEngine();
assert.equal(engine.kits.length, 8, "game should be deployed through a composed kit graph");
assert.ok(engine.inputIntent, "input intent kit should be installed");
assert.ok(engine.routeField, "route field kit should be installed");
assert.ok(engine.hazardField, "hazard field kit should be installed");
assert.ok(engine.scenarioDuration, "scenario duration kit should be installed");
assert.ok(engine.obviousPlace, "gameplay kit should be installed");

const initialRender = engine.obviousPlace.renderSnapshot();
assert.equal(initialRender.revision, GAME_REVISION);
assert.ok(initialRender.objects.some((object) => object.kind === "player"), "render descriptors should include the player");
assert.ok(initialRender.objects.filter((object) => object.kind === "relay").length >= 3, "render descriptors should include relay objectives");
assert.ok(initialRender.objects.some((object) => object.kind === "extract"), "render descriptors should include extraction target");

engine.inputIntent.set({ x: 1, y: 0, primary: false });
engine.tick(1 / 30);
const moved = engine.obviousPlace.snapshot();
assert.ok(moved.player.x > 90, "player should move from normalized input intent");

engine.obviousPlace.reset();
const validation = runAutoplayValidation();
assert.equal(validation.game.status, "won", `autoplay should complete the core loop, got ${validation.game.status}: ${validation.game.statusReason}`);
assert.equal(validation.game.litCount, 3, "all required relays should be lit");
assert.ok(validation.game.score > 300, "score should reflect relays and extraction");
assert.ok(validation.render.hud.status === "won", "render descriptor HUD should expose the win state");
assert.ok(validation.duration.elapsedSeconds < validation.duration.durationSeconds, "core loop should finish before pressure timer expires");
assert.ok(validation.input.inputSeen, "validation should drive the game through input intent");

console.log("Obvious Place first playable smoke passed.");
