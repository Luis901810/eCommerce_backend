const createUser = require('../../handlers/User/createUser')

module.exports = async (req, res) => {
    try {
        const {
            user: newUser,
            error,
            msg
        } = await createUser({
            ...req.body,
            requiredUserName: req.body.requiredUserName !== false,
            requiredUserPassword: req.body.requiredUserPassword !== false,
            includeDeleted: req.body.includeDeleted || false
        })
        if (error) return res.status(400).json({ error: msg })
        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
