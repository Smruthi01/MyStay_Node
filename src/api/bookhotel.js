const express = require('express');
const passport = require('passport')
//const { sequelize } = require("sequelize");
const { QueryTypes } = require('sequelize');
const {sequel} = require('../database/server')
const router = express.Router();

var Sequelize = require('sequelize');
//var sequelize = new Sequelize('practice_mystay', 'root', '123456789@sql');
const pg = require('pg');
pg.defaults.parseInt8 = true;
const Hotels = require('../models/hotels');
router.post('/book',async(req,res)=>{
   // const{ location,category,price}=req.body;
    const location = req.body.location;
    const speciality = req.body.speciality;
    const from = req.body.from;
    const to = req.body.to;
  const rooms = req.body.rooms;

  if (speciality=="all"){
 const all_search = await Hotels.findAll({where:{location:location}})
 .catch((err)=>{console.log("Error: ",err)})
 res.json(all_search)
  console.log("all")
  }
 else{
    const search =  await Hotels.findAll({where:[{location : location , speciality:speciality }]})
  
    .catch(
        (err) => {console.log("Error: ", err);}
  
      );
      res.json(search)
}

})

//from the hotels list
router.post('/list',async(req,res)=>{
  const id = req.body.id;

  const fetch = await Hotels.findOne(({where:{id:id}}))
  .catch(
    (err) => {console.log("Error: ", err);}

  );
  res.json(fetch)
  
})

//public async query(sql: string, options: object): Promise

router.post('/hotelbook/name=?',async(req,res)=>{
  var a , b=0;
  const from = req.body.from;
  const to = req.body.to;
  const name = req.body.name;
  var room = req.body.room;
  var days = req.body.days;
  b = days;
  const id = req.body.id;
  var bill =0;
  var price = 0;

  const bookeduser = req.body.user;
  console.log(days)
var fourprice=0  ; 
  if(room=="four bed"){
    

  //  const fourprice= sequelize.Query("SELECT price_four FROM hotels WHERE id=?", { type:Sequelize.QueryTypes.SELECT})
  //  .then(function(fourprice) {
  //     res.json(fourprice)
  // })

    const fourprice = await Hotels.findAll({raw: true,attributes:['price_four'],where:{id:id}})

  // const fourprice= await sequelize.query("SELECT price_four FROM hotels WHERE id=?",{ type:
  //   Hotels.sequelize.QueryTypes.SELECT })
  // //{ type: QueryTypes.SELECT })
    // const fourprice = await Hotels.findAll({ where: {
    //     id: req.body.id  } })
console.log(fourprice)
         price = (fourprice)
         a =   parseInt(price)
         console.log(a)
        bill =  a*b
    //bill = fourprice+days;
    console.log(bill)

  }else if(room=="two bed"){
    
   const doubleprice = await Hotels.findAll({ where: {
    id: req.body.id  }, attributes: ['price_two'], })
    price = doubleprice*room
    

  }else{
    const four_two = await Hotels.findAll({ where: {
      id: req.body.id  }, attributes: ['price_two','price_double'], })
     
      console.log(four_two)
  }

   


   if(bill){
     const booked =  Bookings.create({bookeduser:bookeduser, hotel:name,location : location,dates_from:from,dates_to:to,});
   }

})
module.exports = router;
//AND price<= ? ANR category=? 
//("SELECT * FROM `users`", { type: QueryTypes.SELECT });
// We didn't need to destructure the result here - the results were returned directly

// db.Production.findAndCountAll(
//   attributes: [
//       [Sequelize.literal('ListPrice * 1.15'), 'NewPrice'],
//   ]
// ).then(function(orders){
//   return res.jsonp(output);
// })