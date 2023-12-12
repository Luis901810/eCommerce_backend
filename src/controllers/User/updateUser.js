const { User } = require('../../db')

module.exports = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) { return res.status(404).json({ error: 'Usuario no encontrado' }) }
        await user.update({ ...req.body })
        return res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
