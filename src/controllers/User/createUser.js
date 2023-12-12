const { User } = require('../../db')

module.exports = async (req, res) => {
    try {
        const newUser = await User.create({ ...req.body })
        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
