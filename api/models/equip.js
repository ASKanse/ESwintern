const mongoose = require('mongoose');

const equipSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  UserID: String,
  EqorTrk: String,
  Catagory: String,
  SubCatagory: String,
  EquipmentName: String,
  Manufacturer: String,
  Model: String,
  Value: Number,
  PremiumRate: Number,
  Hourly: Number,
  Daily: Number,
  Weekly: Number,
  Monthly: Number,
  Capacity: Number,
  Weight: Number,
  Param1: Number,
  Param2: Number,
  EqImg: {type: String , required: true},
  EqLogo: {type: Array , required: true}
});

module.exports = mongoose.model('Equip', equipSchema);
