const express = require('express');
const passport = require('passport')
//const { router } = require('../../app')

const router = express.Router();

const Hotels = require('../models/hotels');
router.get('/admin',async(req,res)=>{
    res.json("welcome admin")
})
router.get('/admin/allhotels',async(req,res)=>{
    const allhotel = await Hotels.findAll();
    res.json(allhotel);
});

router.post('/admin/addhotel',async(req,res)=>{
    const  {name,location,ratings,rooms,speciality,price_double,price_four,four_beds,double_beds,avaailability,offers,img} = req.body;

    const newHotel = new Hotels({name,location,ratings,rooms,speciality,price_double,price_four,four_beds,double_beds,avaailability,offers,img});
    const addedHotel = await newHotel.save().catch((err)=>{
        console.log(err);
        res.status(500).json({error: "Cannot add hotel at the moment!" })
    })

    if(addedHotel){
        
        res.json({message:"Hotel added"})
        console.log(res);
        }

})

router.post('/admin/delete',async(req,res)=>{
    const delname = req.body.delname;
    await Hotels.destroy({where:{name:delname}})
    .then(
        res.json({ message:"hotel deleted" })

    )
    .catch((err)=>{
        console.log(err);
        res.status(500).json({error: "Cannot delete hotel" })

})
})

module.exports = router;