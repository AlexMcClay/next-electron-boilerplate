import { electronAPI } from "../main/preload";

declare global {
  interface Window {
    electronAPI: typeof electronAPI;
  }
}

export {};
