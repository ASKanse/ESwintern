const crypto = require('crypto');
crypto.DEFAULT_ENCODING = 'hex';

// var password='temppass';
// var config = {

//   salt:'edonomixsaltforhashpassword',
//   iterations: 20000,
//   hashBytes: 32, 
//   digest: 'sha256'
// };




module.exports ={

hashPassword:function(password)
{
    if(!password){password='1*==parag==*1';} 
    const key = crypto.pbkdf2Sync(password,'edonomixsaltforhashpassword', 20000,32,'sha256');
    console.log(key);  
    return(key);
},
isEmpty:function(obj) 
{
    return Object.keys(obj).length === 0;
},
uploadFile:function(file,filepath){      
        //file = req.files.filenameinform;
        file.name= Date.now() + "_" + file.name; 
        file.mv(filepath+"/"+file.name, function(err){
         if(err) throw err;
         else{
         	return 1;
         }
     });
},

}