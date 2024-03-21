import { Tray, Menu, nativeImage } from "electron";
import { handleQuit } from "./utils/constants";

const path = require("path");

export class TrayManager {
  private tray: Tray;

  constructor() {
    this.tray = new Tray(
      nativeImage.createFromPath(
        path.join(__dirname, "../../renderer/public/next.svg")
      )
    );
    this.tray.setToolTip("Electron App");
    this.tray.setTitle("Electron App");

    const contextMenu = Menu.buildFromTemplate([
      {
        label: "          Quit          ",
        click: () => handleQuit(),
      },
    ]);

    this.tray.setContextMenu(contextMenu);
  }

  public dummy() {
    console.log("dummy");
  }
}
