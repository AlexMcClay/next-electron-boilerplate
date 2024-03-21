// Main File for Electron

import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import serve from "electron-serve";

import { replaceTscAliasPaths } from "tsc-alias";
import { utilsTest } from "@utils/index";
replaceTscAliasPaths();

require("dotenv").config({
  path: app.isPackaged
    ? path.join(process.resourcesPath, ".env")
    : path.resolve(process.cwd(), ".env"),
});

function handleSetTitle(event: any, title: string) {
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  if (win !== null) {
    win.setTitle(title);
  }
}

// Loading Screen
let splash: BrowserWindow | null;
const createSplashScreen = () => {
  /// create a browser window
  splash = new BrowserWindow(
    Object.assign({
      width: 200,
      height: 100,
      /// remove the window frame, so it will become a frameless window
      frame: false,
    })
  );
  splash.setResizable(false);
  console.log(__dirname);
  splash.loadURL("file://" + __dirname + "/../splash/index.html");
  splash.on("closed", () => (splash = null));
  splash.webContents.on("did-finish-load", () => {
    if (splash) {
      splash.show();
    }
  });
};

// run renderer
const isProd = process.env.NODE_ENV !== "development";
if (isProd) {
  serve({ directory: "renderer/out" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      devTools: !isProd,
    },
    show: false,
  });

  // Expose URL
  if (isProd) {
    win.loadURL("app://./home.html");
  } else {
    // const port = process.argv[2];
    win.loadURL("http://localhost:3000/");
  }

  win.webContents.on("did-finish-load", () => {
    /// then close the loading screen window and show the main window
    if (splash) {
      splash.close();
    }
    win.maximize();
    win.show();
  });
};

app.whenReady().then(() => {
  ipcMain.on("set-title", handleSetTitle);

  createSplashScreen();

  console.log(utilsTest || "ERROR");

  // createWindow();
  setTimeout(() => {
    createWindow();
  }, 2000);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
