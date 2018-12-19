var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add career page'});     
// });

router.post('/',func.auth,function(req, res, next) 
{
  console.log(req.body);
  req.check('id', 'id must be a number').isInt();
  // req.check('profile','invalid career profile').isLength({min:1,max:100});
  req.check('profile','invalid career profile').isLength({min:1,max:100});
  req.check('email', 'Invalid Email').notEmpty().isEmail();
  req.check('first_name','Invalid First Name').isLength({min:2,max:100});
  req.check('last_name','Invalid Last Name').isLength({min:2,max:100});
  req.check('contact_number','Invalid Contact Number').isLength({min:10,max:10});

  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var career = 
    {
        profile:req.body.profile,
            c_email:req.body.email,
    c_first_name:req.body.first_name,
    c_last_name:req.body.last_name,
    c_contact_number:req.body.contact_number      // description:req.body.desc,
      // createdby:req.session.adminid
    };
    con.query("update career SET ? where career_id=? and career_status=1 ;",[career,req.body.id],function(err,careerresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({success:false,msg: 'something went wrong',});
      }
      else
      {
        if(careerresult["affectedRows"]==1)
        res.json({"success":true,'msg':'career updated'});
        else
        res.json({"success":false,'msg':'invalid operation'});  
      }
    });
  }		   
});


module.exports = router;