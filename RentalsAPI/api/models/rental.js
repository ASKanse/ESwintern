const mongoose = require('mongoose');

const borrowrequestSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  SerialNo: String,
  Equipment: String,
  Date: String,
  Quantity: String,
  Site: String
});

const lendeequestSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  SerialNo: String,
  Equipment: String,
  Date: String,
  Quantity: String,
  Site: String
});

var BorrowReq = mongoose.model('BorrowReq', borrowrequestSchema);
var LendReq = mongoose.model('LendReq', lendrequestSchema);

module.exports = {
  BorrowReq: BorrowReq,
  LendReq: LendReq
}
