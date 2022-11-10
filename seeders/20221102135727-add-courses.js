'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
       title: 'English',
       description: 'Course of English learning',
       weeks: 11,
       enroll_cost: 4550,
       minimum_skill: 'Fast learning',
       bootcamps_id: 1
       },
       {
        title: 'i dont know',
        description: 'Course of i dont know learning',
        weeks: 11,
        enroll_cost: 4550,
        minimum_skill: 'Fast learning',
        bootcamps_id: 2
       },
       {
        title: 'Lenguages',
        description: 'Course of Lenguages learning',
        weeks: 11,
        enroll_cost: 4550,
        minimum_skill: 'Fast learning',
        bootcamps_id: 3
       }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});

  }
};
