const { UserStatus } = require('../../../db')

module.exports = async () => {
    try {
        // Insertar 'Activo' si no existe
        await UserStatus.findOrCreate({
            where: { status: 'Activo' },
            defaults: {
                description: 'Estado activo del usuario'
            }
        })

        // Insertar 'Inactivo' si no existe
        await UserStatus.findOrCreate({
            where: { status: 'Inactivo' },
            defaults: {
                description: 'Estado inactivo del usuario'
            }
        })

        console.log('Estados de usuario insertados correctamente.')
    } catch (error) {
        console.error('Error al insertar estados de usuario:', error)
    }
}
