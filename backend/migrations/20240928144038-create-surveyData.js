'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('surveyData', {
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
      name:{
        type:Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phonenumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      countOfplants: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      beHalfOfName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    
    }


    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('surveyData')
  }
};
