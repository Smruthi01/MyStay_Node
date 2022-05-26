const express = require('express');
const User = require("../models/user")
const bcrypt = require('bcrypt')
const router = express.Router();

router.post('/register',async(req,res)=>{
    const {fullName , email,password}=req.body;

    const ExistingUser = await User.findOne({ where: { email } }).catch(
        (err) => {console.log("Error: ", err);}
      );
if(ExistingUser){
    return res
    .status(400)
    .json({message:"Email id already taken"}) 

}

const hashedPassword = await bcrypt.hash(password, 12);

const data = {
    fullName:fullName,
    email:email,
    password:hashedPassword
}

    //   const newUser = new User({fullName,email,hashedPassword });
    const newUser = new User(data);
      const savedUser = await newUser.save().catch((err)=>{
          console.log(err);
          res.status(500).json({error: "Cannot register user at the moment!" })
      });

      if(savedUser){
        
      res.json({message:"thanks for registering"})
      console.log(res);
      }

});

module.exports = router;