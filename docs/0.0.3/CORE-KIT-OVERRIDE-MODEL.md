# Core Kit Override Model

Core capability domains must be configurable and oversteppable without forking the core.

## Four override layers

### 1. Data configuration

Use data configuration for normal app/project differences.

```js
createCoreInputKit({
  actions: ["jump", "grab", "confirm"],
  bindings: {
    keyboard: { jump: "Space" },
    gamepad: { jump: "ButtonA" }
  }
});
```

### 2. Policy override

Use policy overrides for project-specific decision rules.

```js
createCoreInteractionKit({
  policies: {
    canUseAffordance({ actor, target, state }) {
      return target.enabled && !state.completed?.[target.id];
    }
  }
});
```

### 3. Adapter override

Use adapter overrides for renderer, host, network, storage, model, or device integration.

```js
createCoreGraphicsKit({
  adapters: {
    renderer: customRendererAdapter
  }
});
```

### 4. Domain extension

Use domain extension when a future ProtoKit needs to build a larger bubble on top of core.

```js
extendDomainServiceKit(coreInputKit, {
  id: "flight-input-extension",
  domain: "flight-input",
  requires: ["n:core-input"],
  services: ["flight-actions"]
});
```

## Rule

```txt
Configure through data first.
Override policy second.
Swap adapters third.
Extend domains last.
Do not copy core internals into ProtoKits.
```
