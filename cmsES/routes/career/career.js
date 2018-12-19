var express = require('express');
var router = express.Router();

var add=require('./addcareer');
router.use('/add', add);

var view=require('./viewcareer');
router.use('/view', view);

var update=require('./updatecareer');
router.use('/update', update);

var del=require('./deletecareer');
router.use('/delete', del);

module.exports=router;