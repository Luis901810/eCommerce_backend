const { UserStatus } = require('../../../db')
const data = [
    {
        status: 'Activo',
        description: 'Estado activo del usuario'
    },
    {
        status: 'Inactivo',
        description: 'Estado inactivo del usuario'
    }
]

module.exports = async () => {
    try {
        // Insertar status si no existe
        await Promise.all(data.map(async ({ status, description }) => {
            await UserStatus.findOrCreate({
                where: { status },
                defaults: {
                    description
                }
            })
        }))

        console.log('Estados de usuario insertados correctamente.')
    } catch (error) {
        console.error('Error al insertar estados de usuario:', error)
    }
}
