var express = require('express');
var router = express.Router();
var func = require('../func.js');
// var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth,function(req, res, next) 
{
  var enquiry_id=req.query.id;
  // req.checkQuery('id', 'id must be a number').optional().isNumber();
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    con.query("update enquiry set ? where enquiry_id= ? and status=1 ",[{'status':0},enquiry_id,req.session.adminid],function(err,enquiryresult,fields)
    {
        if(err)
        {
          console.log(err);
          res.json({'success':false});
        }
        else
        { 
          if(enquiryresult["affectedRows"]==1)
          res.json({"success":true,'msg':'enquiry deleted'});
          else
          res.json({"success":false,'msg':'invalid operation'});    
        }      
    });  
  }  
});
module.exports = router;