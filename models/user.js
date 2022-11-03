'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        unique(value) {
          
          return User.findOne({where:{username:value}})
            .then((username) => {
              if (username) {
                throw new Error('Ya existe un username con ese nombre');
              }
            })
        },
        isAlpha: {
          args: true,
          msg: 'el campo solo requiere de datos alfabeticos'
        },
        notNull: {
          args: true,
          msg: 'el campo solo requiere de datos presentes'
        },
        notEmpty: {
          args: true,
          msg: 'el campo: username no puede ser vacio'
        },
  }
    },
    email: {
      type:DataTypes.STRING,
      validate: {
      isEmail:{
        args: true,
        msg: 'email no valido'
      },
    },
  },
    password: {
      type: DataTypes.STRING,
      validate:{
        len:{
          args: [5,10],
          msg: 'password tiene un min de 5  y max de 10 caracteres'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};
