import assert from "node:assert/strict";
import {
  createAStarPathfinder,
  createEngine,
  createGameKitComposer,
  createNavMeshKit,
  createPathfindingKit,
  createProceduralKit,
  createProceduralSnapshot,
  defineRuntimeKit,
  navigationAdapters
} from "../src/index.js";

function marker(snapshot, kind) {
  return snapshot.objectiveMarkers.find((entry) => entry.kind === kind)?.position;
}

function makeRuntime(seed = "smoke-seed", mode = "grid") {
  const procedural = createProceduralKit({
    seed,
    width: 34,
    height: 24,
    roomCount: 7,
    obstacleDensity: 0.04
  });
  const navmesh = createNavMeshKit();
  const pathfinding = createPathfindingKit({ mode });
  const composer = createGameKitComposer({
    kits: [pathfinding, navmesh, procedural]
  });
  const engine = createEngine({ kits: composer.kits });
  engine.tick(1 / 60);
  return { engine, composer };
}

const a = createProceduralSnapshot({ seed: "same-seed", width: 30, height: 20 });
const b = createProceduralSnapshot({ seed: "same-seed", width: 30, height: 20 });
const c = createProceduralSnapshot({ seed: "different-seed", width: 30, height: 20 });
assert.equal(a.signature, b.signature, "same seed should produce identical procedural signature");
assert.notEqual(a.signature, c.signature, "different seed should produce a different procedural signature");

for (const mode of ["grid", "navmesh2d", "navmesh3d"]) {
  const { engine } = makeRuntime(`mode-${mode}`, mode);
  const snapshot = engine.procedural.snapshot();
  engine.navigation.requestPath({
    mode,
    start: marker(snapshot, "start"),
    goal: marker(snapshot, "exit")
  });
  engine.tick(1 / 60);
  const path = engine.navigation.snapshot().lastPath;
  assert.equal(path.status, "resolved", `${mode} should resolve a path`);
  assert.ok(path.points.length > 1, `${mode} should return path points`);
}

const blockedAdapter = navigationAdapters.grid({
  width: 3,
  height: 3,
  cellSize: 1,
  origin: { x: 0, z: 0 },
  cells: [
    { x: 0, y: 0, walkable: true, cost: 1 },
    { x: 0, y: 1, walkable: true, cost: 1 },
    { x: 0, y: 2, walkable: true, cost: 1 },
    { x: 1, y: 0, walkable: false, cost: Infinity },
    { x: 1, y: 1, walkable: false, cost: Infinity },
    { x: 1, y: 2, walkable: false, cost: Infinity },
    { x: 2, y: 0, walkable: true, cost: 1 },
    { x: 2, y: 1, walkable: true, cost: 1 },
    { x: 2, y: 2, walkable: true, cost: 1 }
  ]
});
const blocked = createAStarPathfinder({ adapter: blockedAdapter }).findPath({
  start: { x: 0, y: 1 },
  goal: { x: 2, y: 1 }
});
assert.equal(blocked.status, "failed", "blocked grid should fail");

const provider = defineRuntimeKit({ id: "provider-kit", provides: ["provider"] });
const dependent = defineRuntimeKit({ id: "dependent-kit", requires: ["provider"] });
const ordered = createGameKitComposer({ kits: [dependent, provider] });
assert.deepEqual(ordered.installOrder, ["provider-kit", "dependent-kit"], "composer should order dependencies");
assert.throws(
  () => createGameKitComposer({ kits: [dependent] }),
  /Unable to resolve runtime kit dependencies/,
  "composer should reject missing dependencies"
);

console.log("procedural-navigation-smoke ok");
