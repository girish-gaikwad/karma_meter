'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehicalMaster', [
      {
        vehicalCategory: 'Car',
        carbonFootprint: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vehicalCategory: 'Truck',
        carbonFootprint: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vehicalCategory: 'Bus',
        carbonFootprint: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('vehicalMaster', null, {})
  }
};
