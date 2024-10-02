'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('appliancesMaster', [
     {
      id: 1,
      name: 'fridge',
      carbonFootprint: 5,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      id: 2,
      name: 'Ac',
      carbonFootprint: 7,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      id: 3,
      name: 'Chimney',
      carbonFootprint: 10,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      id: 4,
      name: 'Washing Machine',
      carbonFootprint: 6,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id: 5,
      name: 'Electric vehicles',
      carbonFootprint: 4,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id: 6,
      name: 'Air cooler',
      carbonFootprint: 11,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id: 7,
      name: 'Mixer/ Grinder',
      carbonFootprint: 7,
      createdAt: new Date(),
      updatedAt: new Date()
     }
   ])
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('appliancesMaster', null, {})
  }
};
