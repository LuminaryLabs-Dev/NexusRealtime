import { createEngine } from "./engine.js";

function asList(value) {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value.slice() : [value];
}

function normalizeTokenList(value, fieldName, kitId) {
  return asList(value).map((entry) => {
    if (typeof entry !== "string" || entry.trim().length === 0) {
      throw new TypeError(`Runtime kit ${kitId} has an invalid ${fieldName} entry.`);
    }
    return entry;
  });
}

function collectBindings(orderedKits) {
  const bindings = {};
  for (const kit of orderedKits) {
    for (const [name, value] of Object.entries(kit.bindings ?? {})) {
      bindings[name] = value;
    }
  }
  return bindings;
}

export function createGameKitComposer(config = {}) {
  const sourceKits = asList(config.kits);
  const seenIds = new Set();
  const pending = [];

  for (const kit of sourceKits) {
    if (!kit || typeof kit !== "object") {
      throw new TypeError("createGameKitComposer expects runtime kit objects.");
    }
    if (typeof kit.id !== "string" || kit.id.trim().length === 0) {
      throw new TypeError("Runtime kits composed for a game must have stable ids.");
    }
    if (seenIds.has(kit.id)) {
      throw new Error(`Duplicate runtime kit id: ${kit.id}`);
    }
    seenIds.add(kit.id);
    pending.push(kit);
  }

  const orderedKits = [];
  const available = new Set(asList(config.provides));

  while (pending.length > 0) {
    let installedIndex = -1;

    for (let index = 0; index < pending.length; index += 1) {
      const kit = pending[index];
      const requires = normalizeTokenList(kit.requires, "requires", kit.id);
      if (requires.every((token) => available.has(token))) {
        installedIndex = index;
        break;
      }
    }

    if (installedIndex === -1) {
      const blocked = pending.map((kit) => ({
        id: kit.id,
        missing: normalizeTokenList(kit.requires, "requires", kit.id)
          .filter((token) => !available.has(token))
      }));
      throw new Error(`Unable to resolve runtime kit dependencies: ${JSON.stringify(blocked)}`);
    }

    const [kit] = pending.splice(installedIndex, 1);
    orderedKits.push(kit);
    available.add(kit.id);
    for (const token of normalizeTokenList(kit.provides, "provides", kit.id)) {
      available.add(token);
    }
  }

  const bindings = collectBindings(orderedKits);

  return Object.freeze({
    kits: orderedKits,
    orderedKits,
    installOrder: orderedKits.map((kit) => kit.id),
    provides: Array.from(available),
    bindings,
    getBinding(name) {
      return bindings[name];
    },
    hasProvider(name) {
      return available.has(name);
    }
  });
}

export function createRealtimeGame(config = {}) {
  const {
    kits = [],
    root = null,
    canvas = null,
    composer: providedComposer = null,
    ...engineOptions
  } = config;
  const composer = providedComposer ?? createGameKitComposer({ kits });
  const engine = createEngine({
    ...engineOptions,
    kits: composer.kits
  });

  engine.gameComposer = composer;
  engine.game = {
    root: root ?? canvas,
    bindings: composer.bindings,
    installOrder: composer.installOrder
  };

  return engine;
}
