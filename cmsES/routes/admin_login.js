var express = require('express');
var router = express.Router();
var func = require('./func.js');
var edo=require('./edonomix.js');
var con = require('./db');
router.get('/',function(req, res, next) 
{

  if(req.session.adminid)
  {   
    res.json({"success":true,'msg':'admin home page'});
  }
  else
  {     
    res.json({"success":true,'msg':'admin login page'});
  }      
});

router.post('/',function(req,res)
{

  if(req.session.adminid)
  {   
    res.json({"success":true,'msg':'admin home page'});
  }
  else
  {
    //adminname and password length and regx check baki he
    req.check('adminname','invalid adminname').isLength({min:2,max:100});
    req.check('password','invalid password').isLength({min:2,max:100});
     var verrs=req.validationErrors();
    if(verrs)
    {
      res.json({ success:false,msg: verrs[0].msg,});
    }
    else
    {
      console.log(req.ip);
    var admin = 
    {
      admin:req.body.adminname,
      password:req.body.password
    };
    con.query("select *  from admin where status=1 and adminname=?",admin.admin,function(err,result,fields)
    {
        if(err)
        {
          console.log(err);
          res.json({'success':false});
        }
        else if(result.length==1)
        {
            if(edo.hashPassword(admin.password)===result[0].password)
            {
              var hour = 3600000; 
              req.session.cookie.expires = new Date(Date.now() + hour);
              req.session.cookie.maxAge = hour;
              req.session.adminid=result[0].admin_id;
              res.json({'success':true,'msg':'admin home page'})
            }
            else
            {
              //wrong pass
              res.json({"success":true,'msg':'admin login page invalid admin name/password'});
            }     
        }
        else
        { 
            res.json({"success":true,'msg':'admin login page wrong adminname'});    
        }      
    });  


    }
  }        
});

module.exports = router;