const mongoose = require('mongoose');

const datSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name: String
});

module.exports = mongoose.model('Dat', datSchema);

