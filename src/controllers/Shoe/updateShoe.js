const { Shoe, ShoeCategory, ShoeShoeCategory } = require('../../db')

const updateShoe = async (req, res) => {
    try {
        const { id } = req.params
        const { categoryIds } = req.body
        const shoe = await Shoe.findByPk(id)

        if (!shoe) return res.status(404).json({ error: 'Zapato no encontrado' })

        await shoe.update({ ...req.body })

        // Actualizar categorías
        if (Array.isArray(categoryIds)) {
            // Si categoryIds es [] entonces se eliminan todas las categorías
            const categoriesObj = await Promise.all(categoryIds.map(
                async (categoryId) => await ShoeCategory.findByPk(categoryId)
            ))
            await ShoeShoeCategory.destroy({
                where: { ShoeId: id }
            })
            await shoe.addShoeCategory(categoriesObj)
        }

        return res.status(200).json(shoe)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: error.message })
    }
}

module.exports = updateShoe
