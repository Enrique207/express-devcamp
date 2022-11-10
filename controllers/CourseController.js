//Dependencias
//el objeto de conexión
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const CoursesModel = require('../models/courses')


//crear la entidad
const Courses = CoursesModel(sequelize, DataTypes)

//Documentacion para los codigos de CRUD
//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

//listar todos los usuarios
exports.getAllCourses = async (req, res)=>{
    try {
        //traer los ususarios
        const users = await Courses.findAll();

        res.status(200)
            .json({
                "success": true,
                "data": users
    })
    } catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "error": error
        })
    }
}

//Listar usuarios por ID
exports.getSingleCourse = async (req, res) => {
    try {
        const singleUser = await Courses.findByPk(req.params.id);
        if (singleUser) {
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleUser
                })
        } else {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Curso no existente"
                })
        }
    } catch (error) {
        res
            .status(200)
            .json({
                "success": false,
                "errors": "error del servidor"
            })
    }
}
   
//Actualizar usuario
exports.updateCourses = async (req, res) => {
    try {
        const singleCourses = await Courses.findByPk(req.params.id)
        if (!singleCourses) {
            res
                .status(400)
                .json({
                    "success": false,
                    "data": "Curso no existente"
                })
        } else {
            await Courses.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const updateCourses = await Courses.findByPk(req.params.id)
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updateCourses
                })
        }
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": error
            })
    }
}
//Eliminar Course
exports.deleteCourse = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleUser = await Courses.findByPk(req.params.id);
        if (!SingleUser) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Curso no existente"
        })
        } else {
            await Courses.destroy({
                where:{
                    id:req.params.id
                }
            }
            );
        console.log(req.params.id)
        res.status(200)
        .json({
            "success": true,
            "data":SingleUser,
            "mensaje":"Se elimino el curso correctamente"
        });
    }
} catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": "Error de servidor desconocido"
        })
    }
}
//Crear nuevo Course
exports.createCourse = async (req, res)=>{
try {
    res
    const newUser = await Courses.create(req.body);
    res.status(200)
    .json({
        "success": true,
        "data":newUser
    })
} catch (error) {

  if(error instanceof ValidationError){
    console.log(error.errors)
    //Recorrer el arreglo de errores
    //map
    const errores = error.errors.map((elemento)=>elemento.message)
    res
    .status(400)
    .json({
        "sucess":false,
        "error":error
    })

  } else{
    res
        .status(400)
        .json({
            "success": false,
            "error": error
        })
  } 

}

}