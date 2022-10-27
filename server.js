//1. Crear el objeto express 
const express = require('express')
//2. Citar las dependencias necesarias  
const dotenv = require ('dotenv')
const colors = require ('colors')
const connectDB = require('./config/db')
const listEndpoint = require ('express-list-endpoints')
//los componentes de ruta
const bootcampRoutes = require('./Routes/BootcampRoutes')
const courseRoutes = require('./Routes/CourseRouter')
const userRoutes = require('./Routes/UserRoutes')
//establecer archibos de configuracion
dotenv.config({
    path:'./config/config.env'
})

console.log(process.env.PORT)

//Crear el objeto application
//para el servidor de desarrollo 
const app = express()
//validemos al objeto application
//para recibir datos en formato json
app.use(express.json())

//conexion a bd
connectDB()

//rutas de express
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v2/courses', courseRoutes )
app.use('/api/v3/users' , userRoutes)

//endpoints de aplicacion
app.get('/' , (request , response)=>{
    response
    .status(200)
    .json({
        "success": true,
        "data" : "request exitosa"} )
} )

//endpoints de dominio
//bootcamps



//imprimir la lista de endpoint 
//validas del proyecto

console.log(listEndpoint(app))

//ejecutar el servidor de desarrollo
//parametros:
// puerto de  escucha - listen
app.listen(process.env.PORT, () => {
    console.log(`Servidor activo en puerto 5000`.bgWhite.black)
})

