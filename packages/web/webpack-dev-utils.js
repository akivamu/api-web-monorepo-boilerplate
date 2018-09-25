const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const devConfig = require('./config/webpack.dev.config.js')

const compiler = webpack(devConfig)
const middleware = webpackDevMiddleware(compiler, {
  publicPath: devConfig.output.publicPath
})

module.exports = {
  attachToExpress: function (expressApp) {
    expressApp.use(middleware)
    expressApp.use(webpackHotMiddleware(compiler))
  }
}