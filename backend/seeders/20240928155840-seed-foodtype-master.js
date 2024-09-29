'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('foodtypeMaster', [
      {
        foodcategory: 'Vegetables',
        carbonFootprint: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodcategory: 'Fruits',
        carbonFootprint: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodcategory: 'Grains',
        carbonFootprint: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodcategory: 'Dairy',
        carbonFootprint: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('foodtypeMaster', null, {})
  }
};
