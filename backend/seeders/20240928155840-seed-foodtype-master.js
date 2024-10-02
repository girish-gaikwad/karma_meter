'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('foodtypeMaster', [
      {
        foodcategory: 'Veg',
        carbonFootprint: 55,
        image:"/public/shankari/veg.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodcategory: 'Both',
        carbonFootprint: 48 ,
        image:"/public/shankari/both.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodcategory: 'Non veg',
        carbonFootprint: 77,
        image:"/public/shankari/nonVeg.png",
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
