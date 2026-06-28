# core-platform-kit

Purpose: host, device, permission, and fallback capability descriptors.

Owns: headless/browser/native/XR capability descriptors, device class, input/render/storage/network availability, permission descriptors, fallback mode selection.

Does not own: platform-specific gameplay or renderer implementation.

Public API: `createCorePlatformKit(config?)`.

Proof required: default host descriptor smoke, custom capability config smoke, fallback selection smoke, deterministic headless smoke.
