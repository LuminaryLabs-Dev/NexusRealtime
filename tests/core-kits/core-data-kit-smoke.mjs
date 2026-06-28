import assert from "node:assert/strict";
import { createRealtimeGame } from "../../src/index.js";
import {
  createCoreDataKit,
  createSnapshotEnvelope,
  createCompletionLedger,
  createIdempotencyLedger,
  createStateSelector,
  createDataSchema,
  validateDataSchema
} from "../../src/core-kits/core-data-kit/index.js";

const snapshot = createSnapshotEnvelope({ id: "data", state: { value: 1 } });
assert.equal(snapshot.state.value, 1, "snapshot stores state");

const completion = createCompletionLedger();
assert.equal(completion.complete("item").accepted, true, "completion accepts first record");
assert.equal(completion.complete("item").duplicate, true, "completion reports duplicate record");

const idempotency = createIdempotencyLedger();
assert.equal(idempotency.claim("once").accepted, true, "idempotency accepts first claim");
assert.equal(idempotency.claim("once").duplicate, true, "idempotency reports duplicate claim");

const selector = createStateSelector({ id: "unit.value", path: "unit.value" });
assert.equal(selector.read({ unit: { value: 3 } }), 3, "selector reads nested state");

const schema = createDataSchema({ required: ["id"] });
assert.equal(validateDataSchema(schema, { id: "state" }).id, "state", "schema validates required data");

const engine = createRealtimeGame({ kits: [createCoreDataKit({ config: { profile: "piece-smoke" } })] });
assert.equal(engine.n.coreData.getConfig().profile, "piece-smoke", "core data installs under engine.n");

console.log("core-data-kit piece smoke ok");
