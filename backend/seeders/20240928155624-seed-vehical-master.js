'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehicalMaster', [
      {
        vehicalCategory: 'Bicycle/Walk',
        image:"/public/thiru/Bicycle.png",
        carbonFootprint: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vehicalCategory: 'Two wheeler',
        image:"/public/thiru/Motor Scooter@2x.png",
        carbonFootprint: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vehicalCategory: 'car',
        carbonFootprint: 88,
        image:"/public/thiru/Automobile.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('vehicalMaster', null, {})
  }
};
