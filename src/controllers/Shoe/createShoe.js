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
        categoryIds,
    } = req.body

    try {
        console.log('Data a recibir para crear el zapato:', req.body)

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
                genderId: gender,
            },
        })

        if (!created) {
            console.log('El zapato ya existe en la base de datos.')
            return res.status(400).send({ message: 'The shoe already exists' })
        }

        console.log('Zapato creado con éxito:', newShoe)

        // Añadir categorías
        const categoriesObj = await Promise.all(
            categoryIds?.map(
                async categoryId => await ShoeCategory.findByPk(categoryId),
            ),
        )

        console.log('Categorías a añadir al zapato:', categoriesObj)

        await newShoe.addShoeCategory(categoriesObj)

        console.log('Categorías añadidas con éxito al zapato.')

        return res.status(200).json(newShoe)
    } catch (error) {
        console.error('Error al crear el zapato:', error)
        return res.status(500).json({ error: error.message })
    }
}

module.exports = createShoe
