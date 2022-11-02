'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
       title: 'I dont know',
       text: 'Course of English learning',
       rating: 11,
       user_id: 3,
       bootcamp_id: 10
       },
       {
        title: 'English',
        text: 'Course of English learning',
        rating: 11,
        user_id: 1,
        bootcamp_id: 11
       },
       {
        title: 'English',
        text: 'Course of English learning',
        rating: 1,
        user_id: 2,
        bootcamp_id: 12
       }
      ], {});
    },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});

  }
};
