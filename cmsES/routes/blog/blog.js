var express = require('express');
var router = express.Router();

var add=require('./addblog');
router.use('/add', add);

var view=require('./viewblog');
router.use('/view', view);

var update=require('./updateblog');
router.use('/update', update);

var del=require('./deleteblog');
router.use('/delete', del);

module.exports=router;