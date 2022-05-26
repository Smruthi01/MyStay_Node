//const { DataTypes } = require("sequelize/types");
const { DataTypes } = require("sequelize");
const sequelize = require('../database/server');

    const Hotels = sequelize.define("hotels", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING
      },
      ratings: {
        type: DataTypes.INTEGER
      }, 
      rooms:{
        type: DataTypes.INTEGER
      } ,
      speciality:{
          type: DataTypes.STRING,
          get() {
            return this.getDataValue('speciality').split(';')
        },
        set(val) {
           this.setDataValue('speciality',val.join(';'));
        },
      },
      price_double:{
        type: DataTypes.INTEGER
      },
      price_four:{
        type: DataTypes.INTEGER
      },
     four_beds:{
        type: DataTypes.INTEGER
      },
    double_beds:{
        type: DataTypes.INTEGER
      },
      availability: {
        type: DataTypes.INTEGER
      },
      offers:{
        type: DataTypes.STRING
      },
      
  createdAt: {
     
        type: DataTypes.DATE,
  },
  updatedAt: {
     
        type: DataTypes.DATE,
    },
    h_image:{
      type:DataTypes.BLOB
    }
    });



  module.exports = Hotels;