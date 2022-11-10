const express =require('express')
const { 
    getAllCourses,
    getSingleCourse,
    updateCourses,
    deleteCourse,
    createCourse
} = require('../controllers/CourseController')

//definir objeto de ruteo
const router = express.Router()

//crear rutas sin parametros
router.route('/')
            .get(getAllCourses)
            .post(createCourse)
//Crear rutas con parametros
router.route('/:id')
            .get(getSingleCourse)
            .put(updateCourses)
            .delete(deleteCourse)

module.exports = router