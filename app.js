var express = require('express')
var app = express()
var server = require('http').createServer(app)
var port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
})

app.get('/api/users', function (request, response) {
  console.log(request.body)
})

app.post('/api/users', function (request, response) {
  console.log(request.body)
})

server.listen(port, function () {
  console.log('server listening on port: ', port)
})