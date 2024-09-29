'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'admin',
        email: 'admin',
        password: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 2,
        username: 'user',
        email: 'user',
        password: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        username: 'user2',
        email: 'user2',
        password: 'user2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        username: 'user3',
        email: 'user3',
        password: 'user3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('users', null, {})
  }
};
