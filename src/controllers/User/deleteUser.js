const deleteUser = require('../../handlers/User/deleteUser')

module.exports = async (req, res) => {
    try {
        const userId = req.params.id
        const hardDelete = req.query.hardDelete || false
        const { error, msg } = await deleteUser(userId, hardDelete)
        if (error) { return res.status(404).json({ error: msg }) }
        return res.json('Usuario eliminado correctamente')
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
