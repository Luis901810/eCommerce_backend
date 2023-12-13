const { UserGender } = require('../../../db')

const data = [
    {
        gender: 'Masculino',
        description: 'Género asociado a usuarios de sexo masculino.'
    },
    {
        gender: 'Femenino',
        description: 'Género asociado a usuarios de sexo femenino.'
    },
    {
        gender: 'Otro',
        description: 'Género para usuarios que no se identifican como masculino o femenino.'
    }
]

module.exports = async () => {
    try {
        // Insertar los géneros si no existen
        await Promise.all(data.map(async ({ gender, description }) => {
            await UserGender.findOrCreate({
                where: { gender },
                defaults: {
                    description
                }
            })
        }))

        console.log('Géneros de usuario insertados correctamente.')
    } catch (error) {
        console.error('Error al insertar géneros de usuario:', error)
    }
}
