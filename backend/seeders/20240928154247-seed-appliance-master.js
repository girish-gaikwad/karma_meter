'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('appliancesMaster', [
     {
      id: 1,
      name: 'Laptop',
      carbonFootprint: 5,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      id: 2,
      name: 'Mobile',
      carbonFootprint: 5,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      id: 3,
      name: 'Tablet',
      carbonFootprint: 5,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      id: 4,
      name: 'Headphone',
      carbonFootprint: 5,
      createdAt: new Date(),
      updatedAt: new Date()
     }
   ])
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('appliancesMaster', null, {})
  }
};
