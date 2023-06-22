const { contextBridge, ipcRenderer } = require("electron");

// export const electronAPI = {
//   setTitle: (title) => ipcRenderer.send("set-title", title),
// };

export const electronAPI = {
  setTitle: (title: string) => ipcRenderer.send("set-title", title),
};

contextBridge.exposeInMainWorld("electronAPI", electronAPI);
