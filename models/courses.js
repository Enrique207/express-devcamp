'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courses.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        unique(value) {
          
          return courses.findOne({where:{title:value}})
            .then((name) => {
              if (name) {
                throw new Error('Error hay mas de un courses asi');
              }
            })
        },
        /*/isAlpha: {
          args:true,
          msg: "title debe tener solo letras"
        },*/
        notNull: {
          args:true,
          msg: "El campo title debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"title no debe estar vacio"
        },
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El campo descrption debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"description no debe estar vacio"
        },
      }
    },
    weeks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El campo weeks debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"weeks no debe estar vacio"
        },
        isNumeric:{
          args:true,
          msg:"weeks debe contener solo numeros"
        }
      }
    },
    enroll_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El campo enroll_cost debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"enroll_cost no debe estar vacio"
        },
        isNumeric:{
          args:true,
          msg:"enroll_cost debe contener solo numeros"
        }
      }
    }, 
    minimum_skill:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El campo minimun_skill debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"minimun_skill no debe estar vacio"
        },
      }
    },
    bootcamps_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El campo bootcamp_id debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"bootcamp_id no debe estar vacio"
        },
        isNumeric:{
          args:true,
          msg:"bootcamp_id debe contener solo numeros"
        }
      }
    } 
  }, {
    sequelize,
    modelName: 'courses',
    timestamps: false
  });
  return courses;
};