'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fueltypeMaster', [
      {
        fuelcategory: 'Petrol',
        carbonFootprint: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fuelcategory: 'Diesel',
        carbonFootprint: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fuelcategory: 'Electric',
        carbonFootprint: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fuelcategory: 'CNG',
        carbonFootprint: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fueltypeMaster', null, {})
  }
};
