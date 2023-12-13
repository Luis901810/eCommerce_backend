const server = require('./src/server.js')
const { conn } = require('./src/db.js')
const PORT = process.env.PORT || 3001

server.listen(PORT, async () => {
    await conn.sync({ alter: true })
    await require('./src/services/seeds')() // Añadir datos de tablas vacías
    console.log(`Server is listening at ${PORT}`)
    console.log('* * * * * * * * * * * * * * * * * * * * * * ')
})
