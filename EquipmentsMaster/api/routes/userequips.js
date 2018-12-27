const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

Models = require('../models/equip');

router = express.Router();

router.get('/:userid',(req,res,next) => {
  usrnm = req.params.userid;
  Models.UsrEquip.find({UserID: usrnm})
  .select('_id Catagory SubCatagory EquipmentName Manufacturer EqorTrk Hourly Daily Monthly Weight Param1 Param2 EquipmentSerialNo Year HoursofOperation IOTid Site Asset specification')
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

router.get('/:userid/:equipId',(req,res,next) => {
  const usrnm = req.params.userid;
  const id = req.params.equipId;
  Models.UsrEquip.find({UserID: usrnm, _id: id})
  .select('_id Catagory SubCatagory EquipmentName Manufacturer EqorTrk Hourly Daily Monthly Weight Param1 Param2 EquipmentSerialNo Year HoursofOperation IOTid Site Asset specification')
  .exec()
  .then(info => {
    if(info){
      res.status(200).json(info);
    } else {
      res.status(404).json({ message: "No valid entry found for provided ID" })
    }
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  });
});

router.post('/:userid/create', (req,res,next) => {
  const usrnm = req.params.userid;
  Models.Equip.find({Catagory: req.body.Catagory, SubCatagory: req.body.SubCatagory})
  .exec()
  .then(info =>{
    const equipm = new Models.UsrEquip({
      _id: new mongoose.Types.ObjectId(),
      UserID: usrnm,
      Catagory: req.body.Catagory,
      SubCatagory: req.body.SubCatagory,
      Manufacturer: req.body.Manufacturer,
      EqorTrk: info.EqorTrk,
      Hourly: info.Hourly,
      Daily: info.Daily,
      Monthly: info.Monthly,
      Weight: info.Weight,
      Param1: info.Param1,
      Param2: info.Param2,
      EquipmentName: req.body.EquipmentName,
      EquipmentSerialNo: req.body.sernum,
      Year: req.body.year,
      HoursofOperation: req.body.hrop,
      IOTid: req.body.IOTid,
      Site: req.body.site,
      Asset: req.body.optradio,
      specification: info.specification
    });
    equipm.save()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
    });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  });
});

router.patch('/:userid/:equipId', (req, res, next) => {
  const usrnm = req.params.userid;
  const id = req.params.equipId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Models.Equip.updateOne({ _id: id , UserID: usrnm}, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  });
});

router.delete('/:userid/:equipId', (req,res,next) => {
  const usrnm = req.params.userid;
  const id = req.params.equipId;
  Models.Equip.deleteOne({ _id: id , UserID: usrnm})
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  });
});

module.exports = router;
