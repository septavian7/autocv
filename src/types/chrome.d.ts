/* src/types/chrome.d.ts */

declare namespace chrome {
  export namespace runtime {
    export function sendMessage(message: any, callback: (response: any) => void): void;
    export const onMessage: {
      addListener(callback: (message: any, sender: MessageSender, sendResponse: (response: any) => void) => void): void;
    };

    export function getURL(path: string): string;

    interface MessageSender {
      id?: string;
      url?: string;
      tab?: chrome.tabs.Tab;
    }
  }

  export namespace tabs {
    interface Tab {
      id?: number;
      url?: string;
      active?: boolean;
      highlighted?: boolean;
      windowId?: number;
    }
  }
  
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
        type?: 'normal' | 'popup' | 'panel' | 'detached_panel';
        state?: 'normal' | 'minimized' | 'maximized' | 'fullscreen';
        setSelfAsOpener?: boolean;
      }
  
      export function create(createData: CreateData, callback?: (window: Window) => void): Promise<Window>;
    }
  }

