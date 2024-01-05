const deleteUser = require('../../handlers/User/deleteUser')

module.exports = async (req, res) => {
    try {
        const userId = req.params.id
        const hardDelete = req.query.hardDelete || false
        const deleteType = req.query.deleteType || 'id'
        const deleteOptions = {}
        if (deleteType === 'id') deleteOptions.where = { id: userId }
        if (deleteType === 'email') deleteOptions.where = { email: userId }
        const { error, msg } = await deleteUser(deleteOptions, hardDelete)
        if (error) {
            return res.status(404).json({ error: msg })
        }
        return res.json({
            message: 'Usuario eliminado correctamente',
            deleteType,
            hardDelete,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
