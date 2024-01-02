const { conn, UserRol } = require('../../db')
const { QueryTypes } = require('sequelize')

module.exports = async (req, res) => {
    try {
        const tableName = UserRol.tableName
        const query = `SELECT * FROM "${tableName}"`
        const data = await conn.query(query, {
            type: QueryTypes.SELECT
        })
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
