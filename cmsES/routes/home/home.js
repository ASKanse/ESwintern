var express = require('express');
var router = express.Router();

var email=require('./storeemail');
router.use('/storeemail', email);

var view=require('./viewblogs');
router.use('/', view);

var filter=require('./equipsearch');
router.use('/equipfilter', filter);

var searchstr=require('./searchbar');
router.use('/search', searchstr);

module.exports=router;