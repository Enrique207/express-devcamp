'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //crear la columna 'bootcamp_id' FK con  bootcamps
    //addColumn: parametros
    //1. La tabla en la cual poner la columna
    //el nombre de la nueva columna 
    await queryInterface.addColumn('courses',
                                    'bootcamps_id' , 
                                    { 
                                      type: Sequelize.INTEGER,
                                      references: {
                                        model: 'bootcamps',
                                        key: 'id'
                                      },
                                      onUpdate: 'CASCADE',
                                      onDelete: 'SET NULL'
                                    }
                                    )
  },

  async down (queryInterface, Sequelize) {
  //crear la columna 'bootcamp_id' FK con  bootcamps
  //paremetrto: 1. La tabla de donde vas a remover la columna
  //            2. La columna a eliminar 
  await queryInterface.removeColumn('courses', 'bootcamp_id')
  
  }
};
