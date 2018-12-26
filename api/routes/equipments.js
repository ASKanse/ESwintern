const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

Models = require('../models/equip');

router = express.Router();

router.get('/',(req,res,next) => {
  Models.Equip.find()
  .select('_id UserID Catagory SubCatagory EquipmentName Manufacturer EqorTrk Hourly Daily Monthly Capacity Weight Param1 Param2 EquipmentSerialNo Year HoursofOperation IOTid Site')
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

router.get('/:equipId',(req,res,next) => {
  const id = req.params.equipId;
  Models.Equip.findById(id)
  .select('_id UserID Catagory SubCatagory EquipmentName Manufacturer EqorTrk Hourly Daily Monthly Capacity Weight Param1 Param2 EquipmentSerialNo Year HoursofOperation IOTid Site')
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

router.post('/create/equipment',(req,res,next) => {
  console.log('in post');
  const equipm = new Models.Equip({
    _id: new mongoose.Types.ObjectId(),
    UserID: req.body.UserID,
    Catagory: req.body.Catagory,
    SubCatagory: req.body.SubCatagory,
    EquipmentName: req.body.EquipmentName,
    Manufacturer: req.body.Manufacturer,
    EqorTrk: req.body.EqorTrk,
    Hourly: req.body.Hourly,
    Daily: req.body.Daily,
    Monthly: req.body.Monthly,
    Capacity: req.body.Capacity,
    Weight: req.body.Weight,
    Param1: req.body.Param1,
    Param2: req.body.Param2,
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
  console.log('new equip created');
});

router.post('/create/category',(req,res,next) => {
  console.log('in post');
  const newcat = new Models.Cat({
    _id: new mongoose.Types.ObjectId(),
    Catagory: req.body.Catagory
    });
  newcat.save()
  .then(result => {
    res.status(201).json(result);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  });
  console.log('new category created');
});

router.post('/create/subcategory',(req,res,next) => {
  console.log('in post');
  const newsubcat = new Models.SubCat({
    _id: new mongoose.Types.ObjectId(),
    Catagory: req.body.Catagory,
    SubCatagory: req.body.SubCatagory,
    PremiumRate: req.body.PremiumRate,
    Value: new Array(req.body.minval , req.body.maxval),
    //https://stackoverflow.com/questions/41092859/express-body-parser-handling-checkbox-arrays-on-forms
    Params : req.body.option.map(item => (Array.isArray(item) && item[1]) || null)
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
  console.log('new subcategory created');
});

router.patch('/:equipId', (req, res, next) => {
  const id = req.params.equipId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Equip.updateOne({ _id: id }, { $set: updateOps })
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

router.delete('/:equipId', (req,res,next) => {
  const id = req.params.equipId;
  Equip.deleteOne({ _id: id })
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
