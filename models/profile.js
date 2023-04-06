'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
    }
  }
  Profile.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:{
          msg:"Name is required"
        }
      }
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:{
          msg:"Email is required"
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:{
          msg:"Password is required"
        }
      }
    },
    description: {
      type:DataTypes.TEXT,
      allowNull:true
    },
    age: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:{
          msg:"Age is required"
        }
      }
    },
    UserId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:{
          msg:"UserId is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};