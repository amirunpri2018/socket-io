const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const routers = require('./router')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.set('socketio', io);

mongoose.connect('mongodb://localhost:27017/mobile-api');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(routers);
app.use((err, req, res, next) => {
  res.status(500).send({ err: err.message });
});

io.on('connection', function (socket) {
  console.log('A client just joined on', socket.id);

  socket.on('disconnect', function (msg) {
    console.log('user disconnect');
  });
});

http.listen(process.env.PORT || 5000, function () {
  console.log('listening on 5000');
});