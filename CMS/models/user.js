'use strict';
const {
  Model
} = require('sequelize');
const bcryptjs = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile)
      User.belongsToMany(models.Course,{through:"UserCourses"})
    }

    get formatDate(){
      const event = new Date(this.createdAt);
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return event.toLocaleDateString('id-ID',options)
    }
  }
  User.init({
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
    email: {
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
    role: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:{
          msg:"Role is required"
        }
      }
    },
  },{
    sequelize : sequelize,
    modelName: 'User',
  });
  
  User.beforeCreate((instance,options) =>{
    let salt = bcryptjs.genSaltSync(8)
    let hash = bcryptjs.hashSync(instance.password,salt)

    instance.password = hash
    
    if(!instance.role){
      instance.role = "user"
    }
  })
  
  return User;
};