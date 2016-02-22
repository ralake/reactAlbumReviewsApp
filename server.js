var express = require('express')
var app = express()
var server = require('http').createServer(app)
var port = process.env.PORT || 3000
var path = require('path')

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '/public/index.html'))
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
