// Main File for Electron

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const serve = require("electron-serve");

function handleSetTitle(event, title) {
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  if (win !== null) {
    win.setTitle(title);
  }
}

// run renderer
const isProd = process.env.NODE_ENV !== "development";
if (isProd) {
  serve({ directory: "build" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      enableRemoteModule: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Expose URL
  if (isProd) {
    win.loadURL("app://./home.html");
  } else {
    const port = process.argv[2];
    win.loadURL("http://localhost:3000/");
  }
};

app.whenReady().then(() => {
  ipcMain.on("set-title", handleSetTitle);

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});