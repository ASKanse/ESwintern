var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add blog page'});     
// });

router.post('/',func.auth,function(req, res, next) 
{
  console.log(req.body);
  req.check('name','invalid blog name').isLength({min:1,max:100});

  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
     var blog = {
        b_position:req.body.position,
        b_name:req.body.name,
        b_desc:req.body.desc,
        b_image1:req.body.image1,
        b_image2:req.body.image2,
        b_image3:req.body.image3,
        b_image4:req.body.image4,
    };
    con.query("Insert into blog SET ? ;",blog,function(err,result)
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

router.post('/:lang',func.auth,function(req, res, next) 
{
  var lang = req.params.lang;
  var langtb = lang+'blog';    
  console.log(req.body);
  req.check('name','invalid blog name').isLength({min:1,max:100});

  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
     var blog = {
        b_position:req.body.position,
        b_name:req.body.name,
        b_desc:req.body.desc,
        b_image1:req.body.image1,
        b_image2:req.body.image2,
        b_image3:req.body.image3,
        b_image4:req.body.image4,
    };
    con.query("Insert into ? SET ? ;",[langtb,blog],function(err,result)
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