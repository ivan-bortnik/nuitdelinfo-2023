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

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('createRoom', () => {
    const newRoom = generateRandomRoomName();
    socket.join(newRoom);
    rooms.set(socket.id, { room: newRoom });
    console.log(`User ${socket.id} created and joined room: ${newRoom}`);
    io.to(socket.id).emit('roomCreated', newRoom);
  });

  socket.on('joinRoom', (room) => {
    socket.join(room);
    rooms.set(socket.id, { room });
    console.log(`User ${socket.id} joined room: ${room}`);
    io.to(room).emit('roomChanged', room);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    rooms.delete(socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

function generateRandomRoomName() {
  return Math.random().toString(36).substring(2, 7);
}