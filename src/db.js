require('dotenv').config()
const { Sequelize } = require('sequelize')

// --------------------------------------------------------------

// const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

// const sequelize = new Sequelize(
//     `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//     {
//         logging: false,
//         native: false
//     }
// )

// --------------------------------------------------------------
// Luis barrios si vas hacer pruebas
// o ver cambios de manera local por favor comenta esta parte y descomenta la de arriba gracias
// ya una vez hecho verificciones las vuelves a dejar como estaban para que no se rompa el deploy

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
    dialect: 'postgres',
    logging: false,
    ssl: true, // Siempre establecido en true
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

(async () => {
    try {
        await sequelize.authenticate()
        console.log('Successful PostgreSQL connection')
    } catch (error) {
        console.error('Error connecting to PostgreSQL: ', error)
    }
})()

// ----------------------------------------------------------------------

require('./models')(sequelize)

module.exports = {
    ...sequelize.models,
    conn: sequelize
}
