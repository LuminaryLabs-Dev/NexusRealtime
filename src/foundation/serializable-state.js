export function assertSerializableState(value, path = "state") {
  try {
    structuredClone(value);
  } catch (error) {
    throw new TypeError(`${path} must be structured-clone serializable: ${error.message}`);
  }
  if (typeof value === "function") {
    throw new TypeError(`${path} must not be a function.`);
  }
  if (value && typeof value === "object") {
    for (const [key, entry] of Object.entries(value)) {
      assertSerializableState(entry, `${path}.${key}`);
    }
  }
  return value;
}

export function cloneSerializableState(value) {
  assertSerializableState(value);
  return structuredClone(value);
}

export function createSerializableState(initialState = {}) {
  let state = cloneSerializableState(initialState);
  return {
    getState() {
      return cloneSerializableState(state);
    },
    setState(next = {}) {
      state = cloneSerializableState(next);
      return this.getState();
    },
    patchState(patch = {}) {
      state = cloneSerializableState({ ...state, ...patch });
      return this.getState();
    }
  };
}
