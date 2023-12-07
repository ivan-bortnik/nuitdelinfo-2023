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


app.get('/', (req, res) => {
  res.send('<h1>Backend</h1><h2>T\'es pas cense etre la mon reuf</h2>');
});

io.on('connection', (socket) => {
  console.log(`A userconnected: ${socket.id}`);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});