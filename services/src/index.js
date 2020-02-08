var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const PORT = 4000

server.listen(PORT);
// WARNING: app.listen(80) will NOT work here!

io.on('connection', function (socket) {
  console.log('connection established')

  // socket.on('message', function (data) {
  //   console.log('message received:', data)
  // });

  socket.on('newChatMessage', data => {
    io.emit('newChatMessage', data)
  })

  socket.on('disconnect', function () {
    console.log('diconnected')
  });
});

console.log(`Server listening on ${PORT}`)
