'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('appliancesOwned', [
      {
        userID: 1,
        applianceID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userID: 1,
        applianceID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userID: 1,
        applianceID: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userID: 1,
        applianceID: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('appliancesOwned', null, {})
  }
};
