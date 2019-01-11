const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MasterSchema = new Schema({
  name: {
    type: Array,
    required: true
  },
})

const Master = mongoose.model('tps_masters', MasterSchema);

module.exports = Master;
