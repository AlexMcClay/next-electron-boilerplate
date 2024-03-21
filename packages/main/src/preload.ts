import { contextBridge, ipcRenderer } from "electron";

export const electronAPI = {
  setTitle: (title: string) => ipcRenderer.send("test:test", title),
};

contextBridge.exposeInMainWorld("electronAPI", electronAPI);
