const { ShoeGender } = require('../../../db')

const data = [
    {
        gender: 'Masculino',
        description: 'Género asociado a zapatos diseñados para hombres.'
    },
    {
        gender: 'Femenino',
        description: 'Género asociado a zapatos diseñados para mujeres.'
    },
    {
        gender: 'Unisex',
        description: 'Género asociado a zapatos que pueden ser usados por cualquier género.'
    }
]

module.exports = async () => {
    const count = await ShoeGender.count()
    if (count === 0) {
        await ShoeGender.bulkCreate(data)
    }
}
