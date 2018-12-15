const express = require('express');
const mongoose = require('mongoose');
const request = require('request');

router = express.Router();

router.get('/:name', (req,res,next) => {

	const sendname = req.params.name;
	console.log('name is');
	console.log(sendname);
	var url = 'http://localhost:3000/dbhandle/'+sendname;
	
	 request.get (url, function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred and handle it
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          res.send(body)
    });
	/*request.get('localhost:3000/dbhandle/', (err,res,body) => {

		if(err){
			console.log(err);
			throw err;	
		} 
		else{
			console.log(res);
			console.log(body);
		}
	});
	*/
});

module.exports = router;