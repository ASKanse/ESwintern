var express = require('express');
var router = express.Router();
var func = require('./func.js');
var edo=require('./edonomix.js');
var con = require('./db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add admin page'});     
// });

router.post('/',func.auth,function(req, res, next) 
{
	     console.log(req.body);
        console.log(req.ip);
        req.check('adminname','invalid adminname').isLength({min:2,max:100});
        req.check('password','invalid password').isLength({min:2,max:100});
        req.check('name','invalid name').isLength({min:2,max:100});
        // req.check('email','invalid email').isEmail().isLength({min:2,max:100});
        var verrs=req.validationErrors();
        if(verrs)
        {
        	res.json({ success:false,msg: verrs[0].msg,});
   	  	}
   		else
   		{
   			var admin = 
        {
          adminname:req.body.adminname,
          password:edo.hashPassword(req.body.password),
          full_name:req.body.name,          
          createdby:req.session.adminid
        };
        con.query("select *  from admin where adminname=?",admin.adminname,function(err,result,fields)
        {
            if(err)
            {
                    console.log(err);
                    res.json({'success':false});
            }
            else if(result.length ==0)
            {
            		var sql="Insert into admin SET ? ;";
		            con.query(sql,admin,function(err,result)
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
            else
            { 
                res.json({success:true,msg:'username is not allowed'}) ;    
            }      
        }); 

   		}	
         
	   
});


module.exports = router;