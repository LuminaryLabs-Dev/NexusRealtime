import {
  defineComponent,
  defineEvent,
  defineResource
} from "./ecs.js";

export const CommonGameComponents = Object.freeze({
  Position: defineComponent("position"),
  Velocity: defineComponent("velocity"),
  Transform: defineComponent("transform"),
  Renderable: defineComponent("renderable"),
  Collider: defineComponent("collider"),
  NavigationAgent: defineComponent("navigation-agent"),
  NavigationTarget: defineComponent("navigation-target"),
  NavigationObstacle: defineComponent("navigation-obstacle"),
  GeneratedFeature: defineComponent("generated-feature"),
  ProceduralRegion: defineComponent("procedural-region")
});

export const CommonGameResources = Object.freeze({
  Time: defineResource("time"),
  Viewport: defineResource("viewport"),
  GameState: defineResource("game-state"),
  ProceduralState: defineResource("procedural-state"),
  ProceduralSnapshot: defineResource("procedural-snapshot"),
  NavigationState: defineResource("navigation-state"),
  NavigationSnapshot: defineResource("navigation-snapshot")
});

export const CommonGameEvents = Object.freeze({
  ProceduralGenerated: defineEvent("ProceduralGenerated"),
  ProceduralInvalidated: defineEvent("ProceduralInvalidated"),
  PathRequested: defineEvent("PathRequested"),
  PathResolved: defineEvent("PathResolved"),
  PathFailed: defineEvent("PathFailed"),
  AgentArrived: defineEvent("AgentArrived")
});

export const commonGameDefinitions = Object.freeze({
  components: CommonGameComponents,
  resources: CommonGameResources,
  events: CommonGameEvents
});

export function getCommonGameDefinitions() {
  return commonGameDefinitions;
}
