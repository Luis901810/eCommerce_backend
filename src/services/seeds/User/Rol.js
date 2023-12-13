const { UserRol } = require('../../../db')

module.exports = async () => {
    try {
        // Insertar 'Administrador' si no existe
        await UserRol.findOrCreate({
            where: { rol: 'Administrador' },
            defaults: {
                description: 'Rol con acceso completo y privilegios administrativos'
            }
        })

        // Insertar 'Cliente' si no existe
        await UserRol.findOrCreate({
            where: { rol: 'Cliente' },
            defaults: {
                description: 'Rol estándar para usuarios que realizan compras'
            }
        })

        // Insertar 'Invitado' si no existe
        await UserRol.findOrCreate({
            where: { rol: 'Invitado' },
            defaults: {
                description: 'Rol para usuarios no registrados o que no han iniciado sesión'
            }
        })

        console.log('Roles de usuario insertados correctamente.')
    } catch (error) {
        console.error('Error al insertar roles de usuario:', error)
    }
}
