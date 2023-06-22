import { contextBridge, ipcRenderer } from "electron";

export const electronAPI = {
  setTitle: (title: string) => ipcRenderer.send("set-title", title),
};

contextBridge.exposeInMainWorld("electronAPI", electronAPI);
