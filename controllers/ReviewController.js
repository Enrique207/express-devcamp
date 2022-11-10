//Dependencias:
//El objeto conexxión:
const sequelize = require('../config/seq')

//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')

//El modelo
const ReviewModel = require('../models/Reviews')

//Crear la entidad:
const Review = ReviewModel(sequelize, DataTypes)



//listar todos los bootcamps
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll();
        res.status(200)
            .json({
                "success": true,
                "data": reviews
            })
    } catch (error) {
        res.status(200)
            .json({
                "success": false,
                "errors": error
            })
    }
}

//listar Review por id
exports.getSingleReview = async (req, res) => {
    try {
        const singleReview = await Review.findByPk(req.params.id);
        if (singleReview) {
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleReview
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

//Actualizar Review

exports.updateReview = async (req, res) => {
    try {
        const singleReview = await Review.findByPk(req.params.id)
        if (!singleReview) {
            res
                .status(400)
                .json({
                    "success": false,
                    "data": "Bootcamp no existente"
                })
        } else {
            await Review.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const updateReview = await Review.findByPk(req.params.id)
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updateReview
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
exports.deleteReview = async (req, res) => {
    //console.log(req.params.id)
    try {
        const singleReview = await Review.findByPk(req.params.id);
        if (!singleReview) {
            res
                .status(400)
                .json({
                    "success": false,
                    "errors": "Review no existente"
                })
        } else {
            await Review.destroy({
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
exports.createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        res.status(200)
            .json({
                "success": true,
                "data": newReview
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
                    "errors": error
                })
        }
    }
}