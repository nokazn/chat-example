const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'static')))

io.on('connection', (socket) => {
  socket.on('MESSAGE', (msg) => {
    io.emit('MESSAGE', msg);
  });
});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});
