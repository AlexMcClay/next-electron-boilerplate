import { ipcMain } from "electron";

export function handleTest() {
  ipcMain.on("test:test", async (_event) => {
    console.log("TEASasdASDASDASDDASDST");
  });
}
