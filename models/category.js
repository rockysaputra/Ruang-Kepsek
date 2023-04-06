'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Course)
    }

    get formatDate(){
      const event = new Date(this.createdAt);
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return event.toLocaleDateString('id-ID',options)
    }
  }
  Category.init({
    name: {
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};