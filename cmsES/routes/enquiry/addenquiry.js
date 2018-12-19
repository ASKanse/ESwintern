var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add enquiry page'});     
// });

router.post('/',function(req, res, next) 
{
  console.log(req.body);
  req.check('subject','invalid enquiry subject').isLength({min:1,max:100});
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
     var enquiry = {
        subject:req.body.subject,
        name:req.body.name,
        description:req.body.desc,
    };
    con.query("Insert into enquiry SET ? ;",enquiry,function(err,result)
    {
      if(err)
      {
        console.log(err);
        res.json({success:false,msg: 'something went wrong',});
      }
      else
      {
        res.json({ success:true,msg: 'succesful entry', });
      }
    });
  }		   
});
module.exports = router;