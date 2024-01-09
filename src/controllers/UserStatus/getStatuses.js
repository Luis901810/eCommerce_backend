const { UserStatus } = require('../../db')

module.exports = async (req, res) => {
    try {
        const data = await UserStatus.findAll()
        return res.status(200).json(data)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: error.message })
    }
}
