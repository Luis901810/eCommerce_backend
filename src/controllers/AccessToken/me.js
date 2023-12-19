const { User } = require('../../db')

module.exports = async (req, res) => {
    try {
        // Get user
        const user = await User.findByPk(req.userId)
        if (!user) return res.status(401).json({ error: 'El usuario no fue encontrado' })

        // Return Response
        return res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
