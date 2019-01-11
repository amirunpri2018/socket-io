const express = require('express');
const router = express.Router();
const Vote = require('./models/vote')
const Auth = require('./models/auth')

router.get('/', (req, res) => {
  res.sendfile('./index.html');
});

router.post('/auth', (req, res) => {
  const { username, password } = req.body;
  Auth.find({
    $and: [{ "username": username }, { "password": password }]
  })
    .then((result) => {
      res.send(result);
    })
})

router.get('/vote', (req, res) => {
  Vote.find({}).then((result) => {
    res.send(result);
  });
})

router.put('/vote', (req, res, next) => {
  const { id, location } = req.body;
  Vote.findOneAndUpdate({ _id: id }, { $inc: { [location]: 1 } }).then(function () {
    Vote.find({}).then(function (result) {
      res.send(result);
      const io = req.app.get('socketio');
      io.emit('newVote', result);
    })
  }).catch(next);
});

module.exports = router;
