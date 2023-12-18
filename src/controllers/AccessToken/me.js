const { User } = require('../../db')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    try {
        const token = req.header('x-access-token')
        if (!token) return res.status(401).json({ error: 'Unauthorized' })
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findByPk(decoded.id)
        if (!user) return res.status(401).json({ error: 'El usuario no fue encontrado' })
        return res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
