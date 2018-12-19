var express = require('express');
var router = express.Router();
var func = require('../func.js');
// var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth,function(req, res, next) 
{
  var blog_id=req.query.id;
  // req.checkQuery('id', 'id must be a number').optional().isNumber();
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    con.query("update blog set ? where blog_id= ? and status=1 ",[{'status':0},blog_id],function(err,blogresult,fields)
    {
        if(err)
        {
          console.log(err);
          res.json({'success':false});
        }
        else
        { 
          if(blogresult["affectedRows"]==1)
          res.json({"success":true,'msg':'blog deleted'});
          else
          res.json({"success":false,'msg':'invalid operation'});    
        }      
    });  
  }  
});
module.exports = router;