const mongoose = require('mongoose');

const equipSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
  //Capacity: Number, //makes no sense
  Weight: Number,
  Param1: Number,
  Param2: Number,
  specification: Object   //https://stackoverflow.com/questions/17497875/storing-json-object-in-mongoose-string-key
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

const userequipSchema =  mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  UserID: String,
  EqorTrk: String,
  Catagory: String,
  SubCatagory: String,
  EquipmentName: String,
  Manufacturer: String,
  Hourly: Number,
  Daily: Number,
  Monthly: Number,
  Weight: Number,
  Param1: Number,
  Param2: Number,
  EquipmentSerialNo: Number,
  Year: Number,
  HoursofOperation: Number,
  IOTid: String,
  Site: String,
  Asset:String,
  specification: Object   //https://stackoverflow.com/questions/17497875/storing-json-object-in-mongoose-string-key
});

var Equip = mongoose.model('Equip', equipSchema);
var Cat = mongoose.model('Cat', CatSchema);
var SubCat = mongoose.model('SubCat', SubCatSchema);
var UsrEquip = mongoose.model('UsrEquip', userequipSchema);

module.exports = {
  Equip: Equip,
  Cat : Cat,
  SubCat : SubCat,
  UsrEquip : UsrEquip
}
