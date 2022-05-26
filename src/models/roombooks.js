const { DataTypes } = require("sequelize");
const sequelize = require('../database/server');

    const Bookings = sequelize.define("bookings", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },

          hotelBooked:{
              
            name: {
                type: DataTypes.STRING,
                allowNull: false
              },
              location: {
                type: DataTypes.STRING
              },
              days:{
                  type:DataTypes.INTEGER
              }, 
              roomtype:
              {
                  type:DataTypes.STRING
              },
              checkin:{
                  type:DataTypes.DATE
              },
              checkout:{
                  type:DataTypes.Date
              },
              billamount:{
                  type:DataTypes.INTEGER
              }
          },
          guest:{
              gname:{
                  type:DataTypes.STRING
              },
              email:{
                  type:DataTypes.STRING
              }
          }
        
    })
       
    module.exports = Bookings;  
