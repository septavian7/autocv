// src/styles/emotion.config.ts

import { EmotionCache } from "@emotion/cache";
import createCache from "@emotion/cache";

const emotionCache: EmotionCache = createCache({
  key: "my-project-key",
  // Add any additional Emotion cache configuration options suitable for your project
  // For example:
  // stylisPlugins: [],
  // insertionPoint: undefined,
});

export default emotionCache;
