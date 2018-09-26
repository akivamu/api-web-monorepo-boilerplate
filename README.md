# Overview

This demo project uses [Lerna](https://github.com/lerna/lerna) to manage a monorepo, includes:

- API Server (`./packages/server`)
- Web (`./packages/web`)

`web` package can be run separately:

- development: use `webpack-dev-server`
- production: build with `webpack` into `./packages/web/dist`

API Server use ExpressJS to serve `web` package in 2 modes:

- development: via `webpack-dev-middleware` (exposed by `./packages/web/webpack-dev-utils.js`)
- production: via built static web in `./packages/web/dist`

# Details

`server` package:
- ExpressJS
- PassportJS
- JSONWebToken

`web` package:
- VueJS
- webpack

# Usage

```
npm run web:dev      # use webpack-dev-server to serve web
npm run web:build    # webpack build into ./packages/web/dist

npm run serve:dev    # run server, and use webpack-dev-middleware to serve web
npm run serve:start  # run server, and serve static web in ./packages/web/dist
```