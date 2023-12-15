const { ShoeBrand } = require('../../../db')

const data = [
    {
        brand: 'Nike',
        description: 'Nike es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Adidas',
        description: 'Adidas es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Puma',
        description: 'Puma es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Reebok',
        description: 'Reebok es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Converse',
        description: 'Converse es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Vans',
        description: 'Vans es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'New Balance',
        description: 'New Balance es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Under Armour',
        description: 'Under Armour es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Skechers',
        description: 'Skechers es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Fila',
        description: 'Fila es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'DC Shoes',
        description: 'DC Shoes es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'ASICS',
        description: 'ASICS es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Lacoste',
        description: 'Lacoste es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Salomon',
        description: 'Salomon es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Timberland',
        description: 'Timberland es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Vibram',
        description: 'Vibram es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Mizuno',
        description: 'Mizuno es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Onitsuka Tiger',
        description: 'Onitsuka Tiger es una marca de zapatillas deportivas y ropa deportiva.'
    },
    {
        brand: 'Le Coq Sportif',
        description: 'Le Coq Sportif es una marca de zapatillas deportivas y ropa deportiva.'
    }
]

module.exports = async () => {
    const count = await ShoeBrand.count()
    if (count === 0) {
        await ShoeBrand.bulkCreate(data)
    }
}
