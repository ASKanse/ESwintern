const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

Models = require('../models/equip');

router = express.Router();

router.get('/:userID', (req,res,next) =>{
  usrnm = req.params.userid;
  Models.UsrEquip.find({UserID: usrnm})
  .select('_id EquipmentName Manufacturer Catagory IOTid')
  .exec()
  .then(info =>{
    res.status(200).json(info);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  });
});

router.get('/search/:userID', (req,res,next) =>{
  searchstr = req.body;  //https://stackoverflow.com/questions/12345166/how-to-force-parse-request-body-as-plain-text-instead-of-json-in-express
  usrnm = req.params.userid;
  Models.UsrEquip.find({UserID: usrnm , EquipmentName: searchstr})
  .select('_id EquipmentName Manufacturer Catagory IOTid')
  .exec()
  .then(info =>{
    res.status(200).json(info);
  })
  .catch(err => {
      console.log(err);
      res.status(404).json({
        error: err
      });
  });
});

router.get('/searchfueldata/:userID', (req,res,next) =>{
  fueltype = req.query.type;
  fromdate = req.query.from;
  todate = req.query.to;
  usrnm = req.params.userid;
  Models.Fuel.find({UserID: usrnm, Type: fueltype, IssueDate: { $gte : fromdate, $lte : todate}}) //https://stackoverflow.com/questions/44675908/and-not-working-with-lte-and-gte
  .select('_id IssueDate IssueAmt FuelRate InvoiceNum')
  .exec()
  .then(info =>{
    res.status(200).json(info);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  });
});

router.post('/:userID', (req,res,next) =>{
  var usrnm = req.params.userID;
  const fuel = new Models.Fuel({
    _id: new mongoose.Types.ObjectId(),
    UserID: usrnm,
    Type: req.body.type,
    IssueDate: req.body.issuedate,
    IssueAmt: req.body.issueamt,
    FuelRate: req.body.fuelrate,
    InvoiceNum: req.body.invoicenum
  });
  console.log(fuel);
  fuel.save()
  .then(result => {
    res.status(201).json(result);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  });
});

router.post('/dues/:EquipId', (req,res,next) =>{
  const EquipId = req.params.EquipId;
  const Dues = new Models.EquipDues({
    _id: new mongoose.Types.ObjectId(),
    EquipId: EquipId,
    UserInput: req.body.UserInput,
    LastDate: req.body.LastDate,
    NextDues: req.body.NextDues
  });
  Dues.save()
  .then(result => {
    res.status(201).json(result);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  });
});

module.exports = router;
