const express = require('express')
const bodyParser = require('body-parser')

const config = {
  host: 'localhost',
  port: 8080
}

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
  res.send('Hello world')
})

app.listen(config.port, config.host, function onStart (err) {
  if (err) return console.error(err)
  console.log('==> Listening on http://%s:%s', config.host, config.port)
})
