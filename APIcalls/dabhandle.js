const express = require('express');
const mongoose = require('mongoose');

Dat = require('./datamodel');

router = express.Router();

router.get('/',(req,res,next) => {
  Dat.find()
  .select('_id Name')
  .exec()
  .then(info => {
      res.status(200).json(info);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  });
});

router.get('/:name', (req, res, next) => {
	
	const name = req.params.name;
	Dat.find({Name: name}).select('_id Name')
	.then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  });
});

router.post('/', (req,res,next) => {
	const person = new Dat({
		_id: new mongoose.Types.ObjectId(),
        Name: req.body.Name
	});
	person.save()
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