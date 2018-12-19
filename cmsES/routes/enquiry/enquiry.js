var express = require('express');
var router = express.Router();

var add=require('./addenquiry');
router.use('/add', add);

var view=require('./viewenquiry');
router.use('/view', view);

var update=require('./updateenquiry');
router.use('/update', update);

var del=require('./deleteenquiry');
router.use('/delete', del);

module.exports=router;