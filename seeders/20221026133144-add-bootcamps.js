'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('bootcamps', [
    {
     name: 'PHP',
     description: 'Bootcamp for PHP learning',
     phone: 300-11-11,
     average_rating: 3,
     average_cost: 4550,
     user_id: 1
     },
     {
      name: 'Express',
      description: 'Bootcamp for Javascripr learning',

      phone: 300-0-10,
      average_rating: 4,
      average_cost: 6000,
      user_id: 2
     },
     {
      name: 'CSS Bootcamp',
      description: 'Bootcamp for CSS learning',
      phone: 300-0-10,
      average_rating: 4,
      average_cost: 6000,
      user_id: 3
     }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});

  }
};
