/* src/types/chrome.d.ts */

/* --------- CHROME NAMESPACE --------- */

declare namespace chrome {
  /* --------- RUNTIME --------- */

  export namespace runtime {
    // Define a specific type for messages if possible, or use a generic type as an example
    type ChromeMessage = unknown; // Replace 'unknown' with a more specific type or interface

    interface MessageSender {
      id?: string;
      url?: string;
      tab?: chrome.tabs.Tab;
    }

    export function sendMessage(
      message: ChromeMessage,
      callback: (response: ChromeMessage) => void,
    ): void;

    export const onMessage: {
      addListener(
        callback: (
          message: ChromeMessage,
          sender: MessageSender,
          sendResponse: (response: ChromeMessage) => void,
        ) => void,
      ): void;
    };

    export function getURL(path: string): string;
  }

  /* --------- TABS --------- */

  export namespace tabs {
    interface Tab {
      id?: number;
      url?: string;
      active?: boolean;
      highlighted?: boolean;
      windowId?: number;
    }
  }

  /* --------- WINDOWS --------- */

  export namespace windows {
    interface CreateData {
      url?: string | string[];
      tabId?: number;
      left?: number;
      top?: number;
      width?: number;
      height?: number;
      focused?: boolean;
      incognito?: boolean;
      type?: "normal" | "popup" | "panel" | "detached_panel";
      state?: "normal" | "minimized" | "maximized" | "fullscreen";
      setSelfAsOpener?: boolean;
    }

    export function create(
      createData: CreateData,
      callback?: (window: Window) => void,
    ): Promise<Window>;
  }
}
