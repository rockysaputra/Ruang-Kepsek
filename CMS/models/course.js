'use strict';
const {
  Model, Sequelize
} = require('sequelize');
const formatPrice = require('../helper/formatprice');
const {Op} = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsTo(models.Category)
      Course.belongsToMany(models.User,{through:"UserCourses"})
    }

    formattedPrice(){
      return formatPrice(this.price)
    }
    
    get minute(){
      return this.duration + " Minute"
    }
  }
  Course.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Course Name is required"
        },
        notEmpty:{
          msg:"Course Name is required"
        }
      }
    },
    description:{
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Description is required"
        },
        notEmpty:{
          msg:"Description is required"
        }
      }
    },
    duration: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Duration is required"
        },
        notEmpty:{
          msg:"Duration is required"
        },
        min:30,
        max:600
      }
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Price is required"
        },
        notEmpty:{
          msg:"Price is required"
        }
      }
    },
    CategoryId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg:" Category is required"
        },
        notEmpty:{
          msg:" Category is required"
        }
      }
    },
    photoURL:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Photo URL is required"
        },
        notEmpty:{
          msg:"Photo URL is required"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};