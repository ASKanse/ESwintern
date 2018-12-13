const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/')
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString() + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true);
  }
  else{
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

Equip = require('../models/equip');

router = express.Router();

router.get('/',(req,res,next) => {
  Equip.find()
  .select('_id Catagory SubCatagory EquipmentName Manufacturer EqorTrk Model Value PreminumRate Hourly Daily Weekly Monthly Capacity Weight Param1 Param2 EqImg EqLogo')
  .exec()
  .then(docs => {
      const response = {
        equipms: docs.map(doc => {
          return {
            _id: doc._id,
            Catagory: doc.Catagory,
            SubCatagory: doc.SubCatagory,
            EquipmentName: doc.EquipmentName,
            Manufacturer: doc.Manufacturer,
            EqorTrk: doc.EqorTr,
            Value: doc.Value,
            PremiumRate: doc.PremiunRate,
            Hourly: doc.Hourly,
            Daily: doc.Daily,
            Weekly: doc.Weekly,
            Monthly: doc.Monthly,
            Capacity: doc.Capacity,
            Weight: doc.Weight,
            Param1: doc.Param1,
            Param2: doc.Param2,
            EqImg: doc.EqImg,
            EqLogo: doc.EqLogo
          };
        })
      }
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
  Equip.findById(id)
  .select('_id Catagory SubCatagory EquipmentName Manufacturer EqorTrk Model Value PreminumRate Hourly Daily Weekly Monthly Capacity Weight Param1 Param2 EqImg EqLogo')
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

router.post('/create', upload.array('photos', 2),(req,res,next) => {
  const equipm = new Equip({
    _id: new mongoose.Types.ObjectId(),
    Catagory: req.body.Catagory,
    SubCatagory: req.body.SubCatagory,
    EquipmentName: req.body.EquipmentName,
    Manufacturer: req.body.Manufacturer,
    EqorTrk: req.body.EqorTr,
    Value: req.body.Value,
    PremiumRate: req.body.PremiunRate,
    Hourly: req.body.Hourly,
    Daily: req.body.Daily,
    Weekly: req.body.Weekly,
    Monthly: req.body.Monthly,
    Capacity: req.body.Capacity,
    Weight: req.body.Weight,
    Param1: req.body.Param1,
    Param2: req.body.Param2,
    EqImg: req.files['photos'][0].path,
    EqLogo: req.files['photos'][1].path
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
