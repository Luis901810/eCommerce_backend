const { User, UserRol, UserGender, UserStatus, UserAuthMethod } = require('../../db')

module.exports = async (req, res) => {
    try {
        // // * Valida Rol Administrador
        // const { userRole } = req
        // console.log({ userRole })
        // if (!userRole || userRole !== 'Administrador') {
        //     return res.status(403).json({ error: 'Forbidden - Access denied' })
        // }

        // Retornar lista de usuarios
        const options = {
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

        const users = await User.findAll(options)
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
