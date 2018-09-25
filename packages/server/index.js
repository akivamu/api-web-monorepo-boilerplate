const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const config = {
  host: 'localhost',
  port: 8080
}

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/hello', function (req, res) {
  res.send('Hello world')
})

// Serve static web
const webStaticPath = path.join(path.dirname(require.resolve('@api-web-monorepo-boilerplate/web/package.json')), 'dist')
console.log('Resolved path to web dist:' + webStaticPath)
app.use(express.static(webStaticPath))

app.listen(config.port, config.host, function onStart (err) {
  if (err) return console.error(err)
  console.log('==> Listening on http://%s:%s', config.host, config.port)
})
