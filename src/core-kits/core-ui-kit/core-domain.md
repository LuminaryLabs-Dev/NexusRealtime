# core-ui-kit

Purpose: UI descriptor contracts without owning a DOM, React, native, or XR UI implementation.

Owns: HUD descriptors, menu descriptors, prompt descriptors, notification descriptors, panels, focus state, selection state, and accessibility descriptors.

Does not own: concrete UI renderer implementation.

Public API: `createCoreUIKit(config?)`.

Proof required: HUD descriptor smoke, prompt descriptor smoke, focus/selection state smoke, deterministic headless smoke.
