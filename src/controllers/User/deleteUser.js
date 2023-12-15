const hardDeleteUser = require('../../handlers/User/hardDeleteUser')
const softDeleteUser = require('../../handlers/User/softDeleteUser')

module.exports = async (req, res) => {
    try {
        const userId = req.params.id
        const hardDelete = req.query.hardDelete || false
        const { error, msg } = hardDelete ? await hardDeleteUser(userId) : await softDeleteUser(userId)
        if (error) { return res.status(404).json({ error: msg }) }
        return res.json('Usuario eliminado correctamente')
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
