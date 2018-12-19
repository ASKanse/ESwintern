var express = require('express');
var router = express.Router();
// var func = require('../func.js');
// var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',function(req, res, next) 
{

  if(req.session.adminid)
  {   
        var equipment_id=req.query.id;
        // req.checkQuery('id', 'id must be a number').optional().isNumber();
        req.checkQuery('id', 'id must be a number').isNumeric();
                var verrs=req.validationErrors();
      if(verrs)
      {
        res.json({ success:false,msg: verrs[0].msg,});
      }
      else
      {
        con.query("update equipment set ? where equipment_id= ? and status=1 ",[{'status':0},equipment_id],function(err,equipmentresult,fields)
        {
            if(err)
            {
                console.log(err);
                res.json({'success':false});
            }
            else
            { 
                if(equipmentresult["affectedRows"]==1)
                res.json({"success":true,'msg':'equipment deleted'});
                else
                res.json({"success":false,'msg':'invalid operation'});    
            }      
        });  
      }  
           
  }
  else
  {     
    res.json({"success":true,'msg':' login page'});
  }      
});


module.exports = router;