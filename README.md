# electron-react
Electron App using React


## Getting started

The project is based on Electron and create-react-app scaffolding.
You can develop based on create-react-app or Electron embbed application.

To run the entire application, install electron node modules on `root` folder, and `ui` node modules on folder:

- `npm i`
- `cd ui && npm i`

Execute the following command on root folder:

- `npm start`


## Building app on Linux

To run on Linux you just have to run `npm run build-pack` to create a local package. To run a distribution package run `npm run build-dist`

## Building app on Windows

To run on Linux you just have to run `npm run build-pack-win` to create a local package. To run a distribution package run `npm run build-dist-win`


#### NPM Modules

You need to install the following node modules installed global:

- foreman (for process integration) `npm i foreman -g`
- create-react-app (for scaffolding) `npm i create-react-app -g`


### Troubleshooting

#### For FSWatcher error on npm start

Check out these links to know how to fix it.

https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details

https://github.com/facebook/create-react-app/issues/4090