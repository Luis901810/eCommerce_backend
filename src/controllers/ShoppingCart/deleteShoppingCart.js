const { ShoppingCart, ShoppingCartItem } = require('../../db')

module.exports = async (req, res) => {
    try {
        const { id } = req.params

        // Verificar que el carrito existe
        const shoppingCart = await ShoppingCart.findByPk(id)

        if (!shoppingCart) {
            return res
                .status(404)
                .json({ error: 'Carrito de compras no encontrado' })
        }

        // Eliminar el carrito de compras
        await ShoppingCart.destroy({
            where: {
                id,
            },
        })

        return res
            .status(200)
            .json({ message: 'Carrito de compras eliminado correctamente' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: error.message,
        })
    }
}
