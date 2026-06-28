export { assertSerializableState, cloneSerializableState, createSerializableState } from "../../foundation/serializable-state.js";

export function createDataSchema(config = {}) {
  return Object.freeze({
    id: config.id ?? "data-schema",
    version: config.version ?? "0.0.3",
    fields: Object.freeze({ ...(config.fields ?? {}) }),
    required: Object.freeze([...(config.required ?? [])])
  });
}

export function validateDataSchema(schema = {}, value = {}) {
  for (const field of schema.required ?? []) {
    if (!Object.prototype.hasOwnProperty.call(value, field)) {
      throw new TypeError(`Missing required data field: ${field}`);
    }
  }
  return value;
}
