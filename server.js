var express = require('express')
var app = express()
var server = require('http').createServer(app)
var port = process.env.PORT || 3000
var path = require('path')
var ALBUMS = path.join(__dirname, 'database.json')
var fs = require('fs')

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/api/albums', function (request, response) {
  fs.readFile(ALBUMS, function (error, data) {
    if (error) console.error(error)
    response.json((JSON.parse(data)))
  })
})

app.post('/api/albums', function (request, response) {
})

server.listen(port, function () {
  console.log('server listening on port: ', port)
})
