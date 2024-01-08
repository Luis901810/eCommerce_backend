const { User } = require('../../db')

module.exports = async (req, res) => {
    try {
        const userId = req.params.id
        const findType = req.body.findType || 'id'
        // const includeDeleted = req.query.includeDeleted || false
        const userOptions = {}
        if (findType === 'id') userOptions.where = { id: userId }
        if (findType === 'email') userOptions.where = { email: userId }
        const user = await User.findOne(userOptions)
        if (!user)
            return res.status(404).json({ error: 'Usuario no encontrado' })
        return res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
