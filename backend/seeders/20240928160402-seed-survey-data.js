'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('surveyData', [
      {id: '1', userID: 1,name:"girish", email: 'admin', location: 'admin', countOfplants: 1,phonenumber:"9842158991", beHalfOfName: 'admin', createdAt: new Date(), updatedAt: new Date()},
      {id: '2', userID: 2,name:"gaikwad", email: 'user', location: 'user', countOfplants: 1,phonenumber:"9842158991", beHalfOfName: 'user', createdAt: new Date(), updatedAt: new Date()},
  
  ]  )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('surveyData', null, {})
  }
};
