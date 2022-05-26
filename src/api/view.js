const express = require('express');
const passport = require('passport')
const router = express.Router();

router.post('/view/location=?',async(req,res)=>{
    const location = req.body;
    const search =  await Hotels.findAll({where:{location}}).catch(
        (err) => {console.log("Error: ", err);}
  
      );
      res.json(search)
})

module.exports=router;

