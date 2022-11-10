'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamp.init({
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        unique(value){
          return Bootcamp.findOne({where:{name:value}})
          .then((name)=>{
            if (name){
              throw new Error('Ya existe un name con ese nombre');
            }
          })
        },
        isAlpha:{
          args: true,
          msg: 'el campo solo requiere datos alfabeticos'
        },
        notNull: {
          args: true,
          msg: 'el campo solo requiere de datos presentes'
        },
        notEmpty: {
          args: true,
          msg: 'el campo: name no puede estar vacio'
        },
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        isAlpha:{
          args: true,
          msg: 'el campo solo requiere datos alfabeticos'
        },
        notEmpty: {
          args: true,
          msg: 'el campo no puede estar vacio'
        },
      }
    },
    website: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'el campo no puede estar vacio'
        },
        isNumeric:{
          args: true,
          msg: 'el campo solo puede tener numeros'
        } 
      }
    },
    average_rating:{
      type: DataTypes.REAL,
      validate:{
        notEmpty: {
          args: true,
          msg: 'el campo no puede estar vacio'
        },
        isNumeric:{
          args: true,
          msg: 'el campo solo puede tener numeros'
        } 
      }
    },
    average_cost:{
      type: DataTypes.REAL,
      validate:{
        notEmpty: {
          args: true,
          msg: 'el campo no puede estar vacio'
        },
        isNumeric:{
          args: true,
          msg: 'el campo solo puede tener numeros'
        } 
      }
    } 
  }, {
    sequelize,
    modelName: 'Bootcamp',
    timestamps: false
  });
  return Bootcamp;
};