'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //crear la columna 'user_id' FK con  users
    //addColumn: parametros
    //1. La tabla en la cuanl poner la columna
    //el nombre de la nueva columna 
    await queryInterface.addColumn('bootcamps',
                                    'user_id' , 
                                    { 
                                      type: Sequelize.INTEGER,
                                      references: {
                                        model: 'users',
                                        key: 'id'
                                      },
                                      onUpdate: 'CASCADE',
                                      onDelete: 'SET NULL'
                                    }
                                    )
  },

  async down (queryInterface, Sequelize) {
  //crear la columna 'user_id' FK con  users
  //paremetrto: 1. La tabla de donde vas a remover la columna
  //            2. La columna a eliminar 
  await queryInterface.removeColumn('bootcamps', 'user_id')
  
  }
};
