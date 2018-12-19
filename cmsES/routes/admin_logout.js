var express = require('express');
var router = express.Router();
var func = require('./func.js');


router.get('/',function(req, res, next) 
{
	console.log("req.session.cookie.maxAge"+req.session.cookie.maxAge);
	req.session.destroy();
	res.json({"success":true,'msg':'admin login page'});     
});


module.exports = router;