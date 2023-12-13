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
    const count = await UserGender.count()
    if (count === 0) {
        await UserGender.bulkCreate(data)
    }
}
