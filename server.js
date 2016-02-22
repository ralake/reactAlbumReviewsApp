var express = require('express')
var app = express()
var server = require('http').createServer(app)
var port = process.env.PORT || 3000
var path = require('path')
var ALBUMS = path.join(__dirname, 'database.json')
var fs = require('fs')
var bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({
  extended: true
}))

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
  fs.readFile(ALBUMS, function (error, data) {
    if (error) console.error(error)
    var albums = JSON.parse(data)
    var newReview = {
      text: request.body.text,
      author: request.body.author,
      albumId: request.body.albumId,
      id: Date.now().toString(),
      likes: 0
    }
    for (var i = 0; i < albums.length; i++) {
      if (albums[i].id === newReview.albumId) {
        albums[i].reviews.push(newReview)
        break
      }
    }
    fs.writeFile(ALBUMS, JSON.stringify(albums, null, 4), function (error) {
      if (error) console.error(error)
      response.json(albums)
    })
  })
})

server.listen(port, function () {
  console.log('server listening on port: ', port)
})
