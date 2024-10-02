'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fueltypeMaster', [
      {
        fuelcategory: 'Petrol',
        carbonFootprint: 40,
        image:"/public/thiru/Fuel Pump.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fuelcategory: 'Electric',
        carbonFootprint: 7,
        image:"/public/thiru/icons8-electric-plug.svg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fueltypeMaster', null, {})
  }
};
