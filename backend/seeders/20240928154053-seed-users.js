'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'girish',
        email: 'girish@gmail.com',
        password: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 2,
        username: 'thiru',
        email: 'thiru@gmail.com',
        password: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        username: 'selva',
        email: 'selva@gmail.com',
        password: 'user2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        username: 'magesh',
        email: 'makesh@gmail.com',
        password: 'user3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        username: 'shankari',
        email: 'shankari@gmail.com',
        password: 'user4',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('users', null, {})
  }
};
