import { electronAPI } from "./src/preload";

declare global {
  interface Window {
    electronAPI: typeof electronAPI;
  }
}

export {};
