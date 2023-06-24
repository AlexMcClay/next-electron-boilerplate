This is a [Next.js](https://nextjs.org/) and Electron.js project that is used as a boiler plate for creating Electron apps using Next.js as the UI.

## Information

The boilerplate uses the latest version of Next.js and the app directory feature

- It uses the [Static Exports feature from Next.js](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports), so unfortunatly you cant use any feature that require dynamic data.

### Main

Everything regarding the main thread is in the `main` directory, which is written in typescript.

- The Typescript files are compiled to `/main/out`, where `/main/out/main.js` is the main file that is run
- The is a slash screen, similar to the Discord app, where that is shown until the renderer is fully loaded.
- Any html files inside `/main` can use Tailwind classes.

### Renderer

The `/src` directory hosts the renderer which is a Next.js 13. You can use Tailwind classes there.

## Using the boilerplate

- run `npm run dev` to launch the electron app as a dev server, any files you change should automatically update.
- run `npm run build` and after `npm start` to see how the electron app works in production
- run `npm run package` to package the electron app into an executable.\

## Issues

- Currently I'm using the Static Export because I dont know how to launch the prod Next.js app when the executable is opened. Tried with `exec`, but that left the Next.js app running even after the executable was terminated.
- The `main` app for electron has to be restarted every time there are changed done there, I'll try in the future to implement Hot-Reload soonish in the future.

# Outputed files after Build.

- `/.next` and `/out` contains the Next.js renderer
- `/main/out` contains the compiled typescript to javascript files for the main thread.
- `/dist` contains the final packaged Electron app.
