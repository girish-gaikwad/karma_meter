'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('transcations', [
     {
      userID: 1,
      karmaScore: 115,
      fuelID: 1,
      vehicalID: 1,
      foodID: 1,
      vehicalCount: 2,
      AvgKilometers: 10,
      electricityUnit: 12,
      createdAt: new Date(),
      updatedAt: new Date()
     }
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transcations', null, {})
  }
};
