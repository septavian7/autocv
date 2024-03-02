// src/types/emotion-theme-extension.d.ts
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    hoverBarBackground: string;
    hoverBarTextColor: string;
    hoverBarBoxShadow: string;
  }
}