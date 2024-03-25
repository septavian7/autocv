/* src/types/emotion.d.ts */

import "@emotion/react";
import { ThemeColors } from "./theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeColors {}
}
