const { ShoeColor } = require('../../../db')

const data = [
    {
        color: 'rojo',
        description: 'rojo intenso',
        rgbValue: '#FF0000'
    },
    {
        color: 'azul',
        description: 'azul claro',
        rgbValue: '#00FFFF'
    },
    {
        color: 'verde',
        description: 'verde oscuro',
        rgbValue: '#008000'
    },
    {
        color: 'amarillo',
        description: 'amarillo brillante',
        rgbValue: '#FFFF00'
    },
    {
        color: 'naranja',
        description: 'naranja vibrante',
        rgbValue: '#FFA500'
    },
    {
        color: 'rosa',
        description: 'rosa pastel',
        rgbValue: '#FFC0CB'
    },
    {
        color: 'negro',
        description: 'negro clásico',
        rgbValue: '#000000'
    },
    {
        color: 'blanco',
        description: 'blanco puro',
        rgbValue: '#FFFFFF'
    },
    {
        color: 'gris',
        description: 'gris neutro',
        rgbValue: '#808080'
    },
    {
        color: 'morado',
        description: 'morado profundo',
        rgbValue: '#800080'
    },
    {
        color: 'marrón',
        description: 'marrón cálido',
        rgbValue: '#A52A2A'
    },
    {
        color: 'azul marino',
        description: 'azul marino elegante',
        rgbValue: '#000080'
    },
    {
        color: 'verde oliva',
        description: 'verde oliva clásico',
        rgbValue: '#808000'
    },
    {
        color: 'rosado',
        description: 'rosado suave',
        rgbValue: '#FF69B4'
    },
    {
        color: 'gris claro',
        description: 'gris claro',
        rgbValue: '#D3D3D3'
    },
    {
        color: 'azul claro',
        description: 'azul claro',
        rgbValue: '#ADD8E6'
    },
    {
        color: 'verde claro',
        description: 'verde claro',
        rgbValue: '#90EE90'
    },
    {
        color: 'amarillo claro',
        description: 'amarillo claro',
        rgbValue: '#FFFFE0'
    },
    {
        color: 'naranja claro',
        description: 'naranja claro',
        rgbValue: '#FFA07A'
    },
    {
        color: 'rosa claro',
        description: 'rosa claro',
        rgbValue: '#FFB6C1'
    },
    {
        color: 'negro azabache',
        description: 'negro azabache',
        rgbValue: '#0A0A0A'
    },
    {
        color: 'blanco marfil',
        description: 'blanco marfil',
        rgbValue: '#FFFFF0'
    },
    {
        color: 'gris oscuro',
        description: 'gris oscuro',
        rgbValue: '#A9A9A9'
    },
    {
        color: 'azul oscuro',
        description: 'azul oscuro',
        rgbValue: '#00008B'
    },
    {
        color: 'verde oscuro',
        description: 'verde oscuro',
        rgbValue: '#006400'
    },
    {
        color: 'amarillo oscuro',
        description: 'amarillo oscuro',
        rgbValue: '#808000'
    },
    {
        color: 'naranja oscuro',
        description: 'naranja oscuro',
        rgbValue: '#FF8C00'
    },
    {
        color: 'rosa oscuro',
        description: 'rosa oscuro',
        rgbValue: '#FF1493'
    },
    {
        color: 'negro azulado',
        description: 'negro azulado',
        rgbValue: '#00080'
    }
]

module.exports = async () => {
    const count = await ShoeColor.count()
    if (count === 0) {
        await ShoeColor.bulkCreate(data)
    }
}
