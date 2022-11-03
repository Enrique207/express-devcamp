//Dependencias: 
//el objeto de conexxion
const sequelize = require('../config/seq')
//Datatypes de Sequelize
const {DataTypes, ValidationError} = require('sequelize')
//el modelo 
const UserModel = require('../models/user')



//crear la entidad
const User = UserModel(sequelize, DataTypes)
//listar todos los users    
exports.getAllUsers = async (req, res)=>{
    try {
        //traer los usuarios baby
    const users = await User.findAll();
    //response con los datos 
    res
        .status(200)
        .json({
            "success": true,
            "data" : users
        })
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor desconocido"
            })
    }
    
    
}


//listar users por id
exports.getSingleUser = async (req,res)=>{
    try{
        const singleUser = await User.findByPk(req.params.id)
        if(singleUser){
            res
            .status(200)
            .json({
                "success": true,
                "data": singleUser
            })
        }else{
            res
            .status(400)
            .json({
                "success": true,
                "errors": "usuario no existente"
        })
    }

    }catch(error){
        res
        .status(400)
        .json({
            "success": false,
            "errors": "error de servidor desconocido"
        })
    }
  
}


//Borrar users 
exports.deleteUser = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleUser = await User.findByPk(req.params.id);
        if (!SingleUser) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
            await User.destroy({
                where: {
                    id: req.params.id
                }
              });
            }
} catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": " Error de servidor desconocido"
        })
    }
    
}



//crear nuevo user
exports.createUser = async (req, res)=>{
    try{
        const newUser = await User.create(req.body)
        res
            .status(200)
            .json({
                "success": true,
                "data" : newUser
            })
    }catch (error){
        if(error instanceof ValidationError){
            //recorrer el arreglo de errores
            //forEach
            //map
            const errores = error.errors.map((elemento)=> elemento.message)
            res
            .status(400)
            .json({
                "success": false,
                "errors": error
            })
        }else{
            res
            .status(400)
            .json({
                "success":false,
                "errors": "hubo un error en el servidor"
        })
    }
    }
}