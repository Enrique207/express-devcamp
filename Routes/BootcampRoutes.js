const express = require('express')
const { 
    getAllBootcamps,
    getSingleBootcamp,
    updateBootcamp,
    deleteBootcamp,
    createBootcamp
} = require('../controllers/BootcampController')


//definir objeto de ruteo
const router = express.Router()

//crear rutas sin parametros 
router.route('/')
            .get(getAllBootcamps)
            .post(createBootcamp)

//crear rutas con parametros
router.route('/:id')
                .get(getSingleBootcamp)
                .put(updateBootcamp)
                .delete(deleteBootcamp)

module.exports = router