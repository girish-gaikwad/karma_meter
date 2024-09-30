'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('transcations', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userID: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
    },
    karmaScore: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    vehicalCount: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    fuelID:{
      type: Sequelize.INTEGER,
      references: {
        model: 'fueltypeMaster',
        key: 'id'
      },
    },
    vehicalID:{
      type: Sequelize.INTEGER,
      references: {
        model: 'vehicalMaster',
        key: 'id'
      },
    },
    foodID:{
      type: Sequelize.INTEGER,
      references: {
        model: 'foodtypeMaster',
        key: 'id'
      },
    },
    electricityUnit: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    AvgKilometers: {
      type: Sequelize.INTEGER,
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
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('transcations')
  }
};
