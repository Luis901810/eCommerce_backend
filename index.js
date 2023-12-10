const server = require('./src/app.js');
const { conn } = require("./src/db.js");

const PORT = process.env.PORT || 3001

server.listen(PORT, async () => {
    // await conn.drop();
    await conn.sync({ force: true })
    console.log(`Server is listening at ${PORT}`)
    console.log("* * * * * * * * * * * * * * * * * * * * * * ")
})