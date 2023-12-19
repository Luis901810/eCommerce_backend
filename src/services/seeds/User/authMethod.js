const { UserAuthMethod } = require('../../../db')

const data = [
    {
        authMethod: 'App',
        description: 'Registro del usuario en la app con usuario y contraseña.'
    },
    {
        authMethod: 'Google',
        description: 'Autenticación a través de Google.'
    },
    {
        authMethod: 'Github',
        description: 'Autenticación a través de GitHub.'
    }
]

module.exports = async () => {
    try {
        // Insertar los géneros si no existen
        await Promise.all(data.map(async ({ authMethod, description }) => {
            await UserAuthMethod.findOrCreate({
                where: { authMethod },
                defaults: {
                    description
                }
            })
        }))

        console.log('Métodos de autenticación de usuario insertados correctamente.')
    } catch (error) {
        console.error('Error al insertar métodos de autenticación de usuario: ', error)
    }
}
