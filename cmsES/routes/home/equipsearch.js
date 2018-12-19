var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',function(req, res, next) 
{
  if(req.session.adminid)
  {
    var category = req.body.category;
    var subcategory = req.body.subcategory;
    var machinename = req.body.machinename;           
    con.query("select * from equipment where status=? AND category = ? AND subcategory = ? AND machinename = ?",[1,category,subcategory,machinename],req.session.adminid,function(err,equipmentresult,fields)
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
  }
  else
  {     
    res.json({"success":true,'msg':'admin login page'});
  }      
});


module.exports = router;