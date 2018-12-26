const mongoose = require('mongoose');

const equipSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  UserID: String,
  EqorTrk: String,
  Catagory: String,
  SubCatagory: String,
  EquipmentName: String,
  Manufacturer: String,
  //Value: Number, // remove this also
  //PremiumRate: Number, //remove this also
  Hourly: Number,
  Daily: Number,
  //Weekly: Number,  //remove this from all
  Monthly: Number,
  Capacity: Number,
  Weight: Number,
  Param1: Number,
  Param2: Number,
});

const CatSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Catagory: String
});

const SubCatSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Catagory: String,
  SubCatagory: String,
  Value : Array,
  PremiumRate: Number,
  Params: Array
});

var Equip = mongoose.model('Equip', equipSchema);
var Cat = mongoose.model('Cat', CatSchema);
var SubCat = mongoose.model('SubCat', SubCatSchema);

module.exports = {
  Equip: Equip,
  Cat : Cat,
  SubCat : SubCat
}
