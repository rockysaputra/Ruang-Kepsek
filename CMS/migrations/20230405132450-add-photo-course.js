'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn("Courses","photoURL",{type:Sequelize.STRING , defaultValue:"https://s.kaskus.id/images/2018/02/10/8434837_201802101001340152.jpg"})
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("Courses","photoURL",{})
  }
};
