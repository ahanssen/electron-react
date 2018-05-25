# electron-react
Electron App using React


## Requirements

This entire application was developed on `Node@8.x` and `npm@5.x`.

#### NPM Modules

You need to install the following node modules installed global:

- foreman (for process integration) `npm i foreman -g`
- create-react-app (for scaffolding) `npm i create-react-app -g`

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

<<<<<<< HEAD

#### NPM Modules

You need to install the following node modules installed global:

- foreman (for process integration) `npm i foreman -g`
- create-react-app (for scaffolding) `npm i create-react-app -g`


=======
>>>>>>> 6eac9a63ca5462402047c970a9387cdf38fcff38
### Troubleshooting

#### For FSWatcher error on npm start

Check out these links to know how to fix it.

https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details

https://github.com/facebook/create-react-app/issues/4090
