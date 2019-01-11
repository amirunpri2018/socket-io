const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tps01: {
    type: Number,
  },
  tps02: {
    type: Number,
  },
  tps03: {
    type: Number,
  },
  tps04: {
    type: Number,
  },
  tps05: {
    type: Number,
  },
  tps06: {
    type: Number,
  },
})

const Vote = mongoose.model('vote_acquisition', VoteSchema);

module.exports = Vote;
