'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourses extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  UserCourses.init({
    UserId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:{
          msg:"UserId is required"
        }
      }
    },
    CourseId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:{
          msg:"CourseId is required"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'UserCourses',
  });
  return UserCourses;
};