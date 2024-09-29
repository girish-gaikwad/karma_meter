'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fueltypeMaster', [
      {
        fuelcategory: 'Petrol',
        carbonFootprint: 50,
        image:"../../../assets/thiru/Fuel Pump.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fuelcategory: 'Electric',
        carbonFootprint: 25,
        image:"../../../assets/thiru/icons8-electric-plug.svg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fueltypeMaster', null, {})
  }
};
