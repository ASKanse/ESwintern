var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth,function(req, res, next) 
{         
  con.query("select * from blog where status=1",req.session.adminid,function(err,blogresult,fields)
  {
    if(err)
    {
      console.log(err);
      res.json({'success':false});
    }
    // else if(result.length==0)
    // {
    //   res.json({"success":true,'msg':'Data Not Available'});
    // }
    else
    {
      res.json({"success":true,'msg':'all blog list','blogdata':blogresult});    
    }      
  });           
});

router.get('/:lang',func.auth,function(req, res, next) 
{
  var lang = req.params.lang;
  var langtb = lang+'blog';        
  con.query("select * from ? where status=?",[langtb,1],req.session.adminid,function(err,blogresult,fields)
  {
    if(err)
    {
      console.log(err);
      res.json({'success':false});
    }
    // else if(result.length==0)
    // {
    //   res.json({"success":true,'msg':'Data Not Available'});
    // }
    else
    {
      res.json({"success":true,'msg':'all blog list','blogdata':blogresult});    
    }      
  });           
});

module.exports = router;