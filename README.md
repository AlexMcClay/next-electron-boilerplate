This is a [Next.js](https://nextjs.org/) and Electron.js project that is used as a boiler plate for creating Electron apps using Next.js as the UI.

## Information

The boilerplate uses the latest version of Next.js and the app directory feature

- It uses the [Static Exports feature from Next.js](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports), so unfortunatly you cant use any feature that require dynamic data.

## Using the boilerplate

- run `npm run dev` to launch the electron app as a dev server, any files you change should automatically update.
- run `npm run build` and after `npm start` to see how the electron app works in production
- run `npm run package` to package the electron app into an executable.\

## Issues

- Currently I'm using the Static Export because I dont know how to launch the prod Next.js app when the executable is opened. Tried with `exec`, but that left the Next.js app running even after the executable was terminated
