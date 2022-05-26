const express = require('express');
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
//const bcrypt = require('bcryptjs');

const router = express.Router();
router.post('/login',async(req,res)=>{
    const{email,password}=req.body;
    console.log(req.body);

    const ad_email ="admin.mystay@gmail.com";
    const ad_pwd = "Mystay2022"
    if(email==ad_email&& password==ad_pwd){
        res.json("welcome admin")
    }

    //const user = await User.find(email);
    // if (user[0].length !== 1) {
    //     const error = new Error('A user with this email could not be found.');
    //     error.statusCode = 401;
    //     throw error;
    //   }
    const userEmail = await User.findOne({where:{email}}).catch(
        (err)=>{
            console.log(err);
        }
           );
           console.log(res)

    // if(!userEmail)
    // return res
    // .status(404)
    // .json({message:"Email or password does not match!"})
        const givenPassword =  await bcrypt.hash(password, 12);
        console.log(userEmail.password)
    const isEqual = await bcrypt.compare(givenPassword, userEmail.password);
        console.log(isEqual)
    if (!isEqual) {
        console.log("login")
    //  const error = new Error("Wrong password!")
    //   error.statusCode = 401
    //   throw error;
    }

    // if(userEmail.password!==password)
    // return res
    // .status(404)
    // .json({message:"Email or password does not match!"})
    
//bcrypt

    const jwtToken =jwt.sign(
        {id:userEmail.id,email:userEmail.email},
        process.env.JWT_SECRET);

        res.json({message:"Json token",token:jwtToken})
 
       
})

module.exports = router;