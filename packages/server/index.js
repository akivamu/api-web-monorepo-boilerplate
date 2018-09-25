const path = require('path')

// ConfigJS
process.env['NODE_CONFIG_DIR'] = './config/'
const config = require('config')

// Express
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const passportUtils = require('./passport-utils')
passportUtils.attachToExpress(app)

// Rest
app.use('/auth', require('./api/auth'))
app.use('/account', passportUtils.BearerAuthenticated, require('./api/account'))

// Web: handle refresh page action
const history = require('connect-history-api-fallback')
app.use(history())

if (config.env === 'development') {
  // Serve webpack dev middleware
  const webDevUtil = require('@api-web-monorepo-boilerplate/web/webpack-dev-utils.js')
  webDevUtil.attachToExpress(app)
} else {
  // Serve web dist
  const webStaticPath = path.join(path.dirname(require.resolve('@api-web-monorepo-boilerplate/web/package.json')), 'dist')
  console.log('Resolved path to web dist:' + webStaticPath)
  app.use(express.static(webStaticPath))
}

app.listen(config.port, config.host, function onStart (err) {
  if (err) return console.error(err)
  console.log('==> Listening on http://%s:%s', config.host, config.port)
})
