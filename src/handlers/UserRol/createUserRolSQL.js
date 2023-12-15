const { conn, UserRol } = require('../../db')
const { QueryTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid')

module.exports = async (req) => {
    const { rol, description } = req.body
    const tableName = UserRol.tableName
    const id = uuidv4()
    const query = `INSERT INTO "${tableName}"
        ("id", "rol", "description", "createdAt", "updatedAt")
        VALUES ($1, $2, $3, NOW(), NOW());`
    await conn.query(query, {
        bind: [id, rol, description],
        type: QueryTypes.INSERT
    })
}
