var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add equipment page'});     
// });

router.post('/',func.auth,function(req, res, next) 
{
  console.log(req.body);
  req.check('name','invalid name').isLength({min:1,max:100});
  // req.check('description','invalid description').isLength({min:1,max:100});
  req.check('rate','invalid rate').isLength({min:1,max:100}).isNumeric();


  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var equipment = 
    {
      category:req.body.category,
      subcategory:req.body.subcategory,
      machinename:req.body.machinename,
      description:req.body.description,
      rate:req.body.rate
    };
    con.query("Insert into equipment SET ? ;",equipment,function(err,result)
    {
      if(err)
      {
        console.log(sql,err);
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