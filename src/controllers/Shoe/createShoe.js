const { Shoe, ShoeCategory } = require('../../db')

const createShoe = async (req, res) => {
    const {
        name,
        description,
        price,
        image,
        stock,
        discountPercentage,
        size,
        color,
        brand,
        material,
        gender,
        categories
    } = req.body

    try {
        const [newShoe, created] = await Shoe.findOrCreate({
            where: { name },
            defaults: {
                name,
                description,
                price,
                image,
                stock,
                discountPercentage,
                sizeId: size,
                colorId: color,
                brandId: brand,
                materialId: material,
                genderId: gender
            }
        })

        if (!created) {
            return res.status(400).send({ message: 'The shoe already exists' })
        }

        // Añadir categorias
        const categoriesObj = await Promise.all(
            categories.map(async (category) => await ShoeCategory.findByPk(category))
        )
        await newShoe.addShoeCategory(categoriesObj)

        return res.status(200).json(newShoe)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: error.message })
    }
}

module.exports = createShoe
