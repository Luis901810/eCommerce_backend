const checkUserRolCreationData = require('../../utils/UserRol/checkUserRolCreationData')
const createUserRolSQL = require('../../handlers/UserRol/createUserRolSQL')

module.exports = async (req, res) => {
    try {
        const { error, msg } = checkUserRolCreationData(req)
        if (error) return res.status(400).json(msg)
        await createUserRolSQL(req)
        res.json('UserRol creado correctamente')
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
