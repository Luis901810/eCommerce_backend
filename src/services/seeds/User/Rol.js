const { UserRol } = require('../../../db')

const data = [
    {
        rol: 'Administrador',
        description: 'Rol con acceso completo y privilegios administrativos'
    },
    {
        rol: 'Cliente',
        description: 'Rol estándar para usuarios que realizan compras'
    },
    {
        rol: 'Invitado',
        description: 'Rol para usuarios no registrados o que no han iniciado sesión'
    }
]

module.exports = async () => {
    try {
        // Insertar rol si no existe
        await Promise.all(data.map(async ({ rol, description }) => {
            await UserRol.findOrCreate({
                where: { rol },
                defaults: {
                    description
                }
            })
        }))

        console.log('Roles de usuario insertados correctamente.')
    } catch (error) {
        console.error('Error al insertar roles de usuario:', error)
    }
}
