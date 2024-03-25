// src/stores/mobx.config.ts

import { configure } from "mobx";

configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: false,
  // Add any additional MobX configuration options suitable for your project
  // For example:
  // isolateGlobalState: true,
  // useProxies: 'always',
});
