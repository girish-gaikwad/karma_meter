'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('foodtypeMaster', [
      {
        foodcategory: 'Veg',
        carbonFootprint: 5,
        image:"../../assets/shankari/veg.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodcategory: 'Both',
        carbonFootprint: 5,
        image:"../../assets/shankari/both.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodcategory: 'Non veg',
        carbonFootprint: 5,
        image:"../../assets/shankari/nonVeg.png",
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
