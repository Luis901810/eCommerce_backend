const { User } = require('../../db')

module.exports = async (req, res) => {
    try {
        // * Valida Rol Administrador
        const { userRole } = req
        console.log({ userRole })
        if (!userRole || userRole !== 'Administrador') {
            return res.status(403).json({ error: 'Forbidden - Access denied' })
        }

        // Retornar lista de usuarios
        const options = {}
        const users = await User.findAll(options)
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
