var express = require('express');
var router = express.Router();
var func = require('../func.js');
// var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth,function(req, res, next) 
{
  var career_id=req.query.id;
  // req.checkQuery('id', 'id must be a number').optional().isNumber();
  req.checkQuery('id', 'id must be a number').isInt();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    con.query("update career set ? where career_id= ? and career_status=1  ",[{'career_status':0},career_id,req.session.adminid],function(err,careerresult,fields)
    {
        if(err)
        {
          console.log(err);
          res.json({'success':false});
        }
        else
        { 
          if(careerresult["affectedRows"]==1)
          res.json({"success":true,'msg':'career deleted'});
          else
          res.json({"success":false,'msg':'invalid operation'});    
        }      
    });  
  }  
});
module.exports = router;