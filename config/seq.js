const Sequelize = require('sequelize')
const dotenv = require('dotenv')

//configurar ruta de config.env
dotenv.config({path: './config_env/config.env'})
//definir un objeto de conexion

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host:process.env.DATABASE_HOST,   
        port:process.env.DATABASE_PORT,
        dialect:process.env.DATABASE_DIALECT
    }
)
//console.log(sequelize)
module.exports = sequelize