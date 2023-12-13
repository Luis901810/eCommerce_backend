const { ShoeCategory } = require('../../../db')

const data = [
    {
      "category": "Sneakers",
      "description": "Calzado deportivo y casual"
    },
    {
      "category": "Botas",
      "description": "Calzado de caña alta"
    },
    {
      "category": "Zapatillas",
      "description": "Calzado cómodo y ligero"
    },
    {
      "category": "Tacones",
      "description": "Calzado de altura para ocasiones formales"
    },
    {
      "category": "Sandalias",
      "description": "Calzado abierto y fresco"
    },
    {
      "category": "Mocasines",
      "description": "Calzado sin cordones y con suela flexible"
    },
    {
      "category": "Oxfords",
      "description": "Calzado con cordones y estilo clásico"
    },
    {
      "category": "Bailarinas",
      "description": "Calzado plano y femenino"
    },
    {
      "category": "Pantuflas",
      "description": "Calzado cómodo para estar en casa"
    },
    {
      "category": "Alpargatas",
      "description": "Calzado de tela con suela de esparto"
    },
    {
      "category": "Chanclas",
      "description": "Calzado de dedo para la playa o la piscina"
    },
    {
      "category": "Hombre",
      "description": "Calzado masculino y moderno"
    },
    {
      "category": "Mujer",
      "description": "Calzado femenino y variado"
    },
    {
      "category": "Niños",
      "description": "Calzado infantil y divertido"
    },
    {
      "category": "Deportivo",
      "description": "Calzado para la práctica de deportes"
    },
    {
      "category": "Informal",
      "description": "Calzado cómodo para el día a día"
    },
    {
      "category": "Formal",
      "description": "Calzado elegante para ocasiones especiales"
    },
    {
      "category": "Verano",
      "description": "Calzado fresco y ligero"
    },
    {
      "category": "Invierno",
      "description": "Calzado abrigado y resistente"
    }
  ]
module.exports = async () => {
    const count = await ShoeCategory.count()
    if (count === 0) {
        await ShoeCategory.bulkCreate(data)
    }
}
