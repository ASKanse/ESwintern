var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add enquiry page'});     
// });

router.post('/',func.auth,function(req, res, next) 
{
  console.log(req.body);
  req.check('subject','invalid enquiry subject').isLength({min:1,max:100});
  req.check('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var enquiry = 
    {
      subject:req.body.subject,
      name:req.body.name,
      description:req.body.desc,
    };
    con.query("update enquiry SET ? where enquiry_id=? and status=1 ;",[enquiry,req.body.id],function(err,enquiryresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({success:false,msg: 'something went wrong',});
      }
      else
      {
        if(enquiryresult["affectedRows"]==1)
        res.json({"success":true,'msg':'enquiry updated'});
        else
        res.json({"success":false,'msg':'invalid operation'});  
      }
    });
  }		   
});


module.exports = router;