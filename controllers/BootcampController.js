//Dependencias:
//El objeto conexxión:
const sequelize = require('../config/seq')

//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')

//El modelo
const BootcampModel = require('../models/Bootcamp')

//Crear la entidad:
const Bootcamp = BootcampModel(sequelize, DataTypes)



//listar todos los bootcamps
exports.getAllBootcamps = async (req, res) => {
    try {
        const bootcamps = await Bootcamp.findAll();
        res.status(200)
            .json({
                "success": true,
                "data": bootcamps
            })
    } catch (error) {
        res.status(200)
            .json({
                "success": false,
                "errors": "Error de servidor desconocido"
            })
    }
}

//listar Bootcamp por id
exports.getSingleBootcamp = async (req, res) => {
    try {
        const singleBootcamp = await Bootcamp.findByPk(req.params.id);
        if (singleBootcamp) {
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleBootcamp
                })
        } else {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Bootcamp no existente"
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

//Actualizar Bootcamps

exports.updateBootcamp = async (req, res) => {
    try {
        const singleBootcamp = await Bootcamp.findByPk(req.params.id)
        if (!singleBootcamp) {
            res
                .status(400)
                .json({
                    "success": false,
                    "data": "Bootcamp no existente"
                })
        } else {
            await Bootcamp.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const updateBootcamp = await Bootcamp.findByPk(req.params.id)
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updateBootcamp
                })
        }
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor desconocido"
            })
    }
}

//Borrar Bootcamp
exports.deleteBootcamp = async (req, res) => {
    //console.log(req.params.id)
    try {
        const singleBootcamp = await Bootcamp.findByPk(req.params.id);
        if (!singleBootcamp) {
            res
                .status(400)
                .json({
                    "success": false,
                    "errors": "Bootcamp no existente"
                })
        } else {
            await Bootcamp.destroy({
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

//Crear nuevo Bootcamp
exports.createBootcamp = async (req, res) => {
    try {
        const newBootcamp = await Bootcamp.create(req.body);
        res.status(200)
            .json({
                "success": true,
                "data": newBootcamp
            })

    } catch (error) {
        if (error instanceof ValidationError) {
            //recorrer el arreglo de errores
            //Foreach
            //map
            const errores = error.errors.map((elemento) => {
                return elemento.message

            });
            res
                .status(400)
                .json({
                    "success": false,
                    "errors": error
                })
        } else {
            res
                .status(400)
                .json({
                    "success": false,
                    "errors": "error de servidor"
                })
        }
    }
}