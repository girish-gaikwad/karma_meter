'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('appliancesOwned', {
     id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
     },
     userID:{
       type: Sequelize.INTEGER,
       references: {
                model: 'users',
                key: 'id'
              },
     },

     applianceID:{
       type: Sequelize.INTEGER,
       references: {
                model: 'appliancesMaster',
                key: 'id'
              },
     },
   
     createdAt: {
       allowNull: false,
       type: Sequelize.DATE
     },
     updatedAt: {
       allowNull: false,
       type: Sequelize.DATE
     }
   })
  },

  async down (queryInterface, Sequelize) {
    await  queryInterface.dropDatabase('appliancesOwned')
  }
};
