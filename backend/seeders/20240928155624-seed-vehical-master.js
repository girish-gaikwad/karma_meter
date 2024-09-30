'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehicalMaster', [
      {
        vehicalCategory: 'Bicycle/Walk',
        image:"../../../assets/thiru/Bicycle.png",
        carbonFootprint: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vehicalCategory: 'Two wheeler',
        image:"../../../assets/thiru/Motor Scooter@2x.png",
        carbonFootprint: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vehicalCategory: 'car',
        carbonFootprint: 100,
        image:"../../../assets/thiru/Automobile.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('vehicalMaster', null, {})
  }
};
