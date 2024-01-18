const { User, UserRol, UserGender, UserStatus, UserAuthMethod } = require('../../db')

module.exports = async (req, res) => {
    try {
        const userId = req.params.id
        const findType = req.query.findType || 'id'
        // const includeDeleted = req.query.includeDeleted || false
        const userOptions = {
            include: [
                {
                    model: UserRol,
                    attributes: ['id', 'rol'],
                },
                {
                    model: UserGender,
                    attributes: ['id', 'gender'],
                },
                {
                    model: UserStatus,
                    attributes: ['id', 'status'],
                },
                {
                    model: UserAuthMethod,
                    attributes: ['id', 'authMethod'],
                },
            ],
            where: {
                deletedAt: null,
            },
        }
        if (findType === 'id') userOptions.where.id = userId
        if (findType === 'email') userOptions.where.email = userId
        const user = await User.findOne(userOptions)
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' })
        return res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
