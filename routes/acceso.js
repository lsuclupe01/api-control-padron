var express = require('express');
var router = express.Router();
const textflow = require('textflow.js');

textflow.useKey("4gFV4uns49d49YJz09UKkCGQEfmQCnfSAk2JePo2gAWM4pzfmLghTC0O3lyUm04T");

/* GET users listing. */
router.get('/verificarCodeSMS', async(req, res) => {
    //res.send('respond with a equipos');
     const {nroFono,code} = req.query;
     if(nroFono && code){
        var result = await textflow.verifyCode(nroFono,code);
    
        if(!result.valid){
            return res.status(400).json({success:false});
        }
        return res.status(200).json({success:true});
    }   
    return res.status(400).json({success:false});
  });

router.get('/enviarCodeSMS', async(req, res) =>{
  //res.send('respond with a equipos');
   const {nroFono} = req.query;
   console.log("nroFono = " + nroFono);
   
   if(nroFono){
    var result = await textflow.sendVerificationSMS("+51993484493");
    console.log("result.ok = " + result.ok);
    if(result.ok){
        return res.status(200).json({success:true});
    }
    return res.status(400).json({success:false});
   }  
   return res.status(400).json({success:false});
});

module.exports = router;