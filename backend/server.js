const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const os = require('os-utils');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');

  const interval = setInterval(() => {
    os.cpuUsage((v) => {
      console.log('CPU Usage:', v * 100);
      socket.emit('cpuData', { cpuUsage: v * 100 });
    });
  }, 1000);

  socket.on('disconnect', () => {
    clearInterval(interval);
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
