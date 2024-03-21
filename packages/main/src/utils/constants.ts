import { app } from "electron";

export const isProd = process.env.NODE_ENV !== "development";

export function handleQuit() {
  console.log("quitting");
  app.quit();
}
