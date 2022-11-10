const express = require('express')
const { 
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
    createReview
} = require('../controllers/ReviewController')


//definir objeto de ruteo
const router = express.Router()

//crear rutas sin parametros 
router.route('/')
            .get(getAllReviews)
            .post(createReview)

//crear rutas con parametros
router.route('/:id')
                .get(getSingleReview)
                .put(updateReview)
                .delete(deleteReview)

module.exports = router