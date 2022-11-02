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
       bootcamps_id: 6
       },
       {
        title: 'i dont know',
        description: 'Course of i dont know learning',
        weeks: 11,
        enroll_cost: 4550,
        minimum_skill: 'Fast learning',
        bootcamps_id: 5
       },
       {
        title: 'Lenguages',
        description: 'Course of Lenguages learning',
        weeks: 11,
        enroll_cost: 4550,
        minimum_skill: 'Fast learning',
        bootcamps_id: 4
       }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});

  }
};
