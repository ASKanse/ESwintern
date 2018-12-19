var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth,function(req, res, next) 
{         
  var findstring = req.body.searchstr;
  var querystring = '% '+req.body.searchstr+' %';
  con.query("select * from blog where status=? AND title LIKE ?",[1, querystring],req.session.adminid,function(err,blogresult,fields)
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
  con.query("select * from equipment where status=? AND (category LIKE ? OR subcategory LIKE ? OR machinename LIKE ?)",[1,findstring,findstring,findstring],req.session.adminid,function(err,equipmentresult,fields)
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
        res.json({"success":true,'msg':'all equipment list ','equipmentdata':equipmentresult});    
      }      
  });            
});
module.exports = router;