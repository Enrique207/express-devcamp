const sequelize = require('./seq')
const colors = require('colors')


//definir la funcion de conexiona la base
//de datos

const connectDB = async ()=>{
    try{
    //conectarse a la base de datos
    await sequelize.authenticate()
    console.log('My love are you connected to mysql'.bgBlue)
     // Create a new user
  
    }catch (error){
        console.log(error)
    }
}

module.exports = connectDB