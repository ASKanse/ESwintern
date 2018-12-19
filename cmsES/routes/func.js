var extend = require('util')._extend;
var db = require('./db');
var edo=require('./edonomix.js');
module.exports = {

   

    logout :function(req,res,next){
        console.log("req.session.cookie.maxAge"+req.session.cookie.maxAge);
        req.session.destroy();
        // console.log(req.session.cookie.maxAge);
        next();
    },
    auth :function(req,res,next){
        if(req.session.adminid){next();}
        else{
            res.json({"success":false,'msg':'user login page'});
           // res.render('admin_login.ejs',{title:'',msg:"Enter username and Password",login_para:0});
        }
    },  
     logauth :function(req,res,next){

        //username and password length and regx check baki he
        console.log(req.ip);
        var user = extend({}, req.body);

            con.query("select *  from user where user_name=?",user.username,function(err,result,fields){
         if(err){
                console.log(err);
                res.json({'success':false});

            }
         else if(result.length==1)
         {
            if(edo.hashPassword(user.password)===result[0].password){

                var hour = 3600000; 
                        req.session.cookie.expires = new Date(Date.now() + hour);
                        req.session.cookie.maxAge = hour;
                   console.log("req.session.cookie.maxAge"+req.session.cookie.maxAge,req.session.cookie.expires);
                    req.session.userid=result[0].user_id;
                    next();
            }
            else{
                    //wrong pass
                  res.json({"success":true,'msg':'user login page invalid user name/password'});
                }

                
            }
          else{ 
                console.log("hash"+edo.hashPassword(user.password));
                res.json({"success":true,'msg':'user login page wrong username'});
                   
             }  
            
                 

        });

    },  
}         