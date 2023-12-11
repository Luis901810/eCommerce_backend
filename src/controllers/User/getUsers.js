const { User } = require('../../db')

module.exports = async (req, res) => {
    try {
        const options = {}
        const users = await User.findAll(options)
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
