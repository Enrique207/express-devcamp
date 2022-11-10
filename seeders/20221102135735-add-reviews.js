'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
       title: 'I dont know',
       text: 'Course of English learning',
       rating: 11,
       user_id: 1,
       bootcamp_id: 1
       },
       {
        title: 'English',
        text: 'Course of English learning',
        rating: 11,
        user_id: 2,
        bootcamp_id: 2
       },
       {
        title: 'English',
        text: 'Course of English learning',
        rating: 1,
        user_id: 3,
        bootcamp_id: 3
       }
      ], {});
    },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});

  }
};
