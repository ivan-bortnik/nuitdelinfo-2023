const { create } = require('domain');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = require("socket.io")(server, {
  cors: {
    origin: "*"
  }
});


var rooms = {}


app.get('/', (req, res) => {
  res.send('<h1>Backend</h1><h2>T\'es pas cense etre la mon reuf</h2>');
});

io.on('connection', (socket) => {
  console.log(`A user connected: ${socket.id}`);

  socket.emit('updateRoomsList', rooms);

  socket.on('createRoom', () => {
    const newRoom = { "id": generateRandomRoomName(), "playersCount": 1 }
    rooms[newRoom.id] = newRoom;

    socket.join(newRoom.id);
    console.log(`User ${socket.id} created and joined room ${newRoom.id}`);

    io.emit('updateRoomsList', rooms);
  });

  socket.on('requestToJoin', (room) => {
    if (rooms[room].playersCount < 2) {
      socket.join(room);
      rooms[room].playersCount++;
      io.emit('updateRoomsList', rooms);
    }
  });

  socket.on('disconnecting', (e) => {
    console.log('A user disconnected');
    for (let room of socket.rooms) {
      if (rooms[room] !== undefined) {
        rooms[room].playersCount--;
        if (rooms[room].playersCount == 0) {
          delete  rooms[room];
        }
      }
    };
    io.emit('updateRoomsList', rooms);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

function generateRandomRoomName() {
  return Math.random().toString(36).substring(2, 7);
}