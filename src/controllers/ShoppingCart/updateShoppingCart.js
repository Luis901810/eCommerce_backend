const { ShoppingCart, ShoppingCartItem } = require('../../db')

module.exports = async (req, res) => {
    try {
        const { id } = req.params
        const { totalAmount, items } = req.body

        // Verificar que el carrito existe
        const shoppingCart = await ShoppingCart.findByPk(id, {
            include: [{ model: ShoppingCartItem }],
        })

        if (!shoppingCart) {
            return res.status(404).json({ error: 'Order not found' })
        }

        // ! Si hay items a editar
        if (items && items.length > 0) {
            // ! Eliminar todos los elementos existentes del carrito
            await ShoppingCartItem.destroy({
                where: {
                    ShoppingCartId: id,
                },
            })

            // * Agregar los nuevos elementos al carrito
            for (const item of items) {
                await ShoppingCartItem.create({
                    quantity: item.quantity,
                    unitPrice: item.unitPrice,
                    discount: item.discount,
                    shoeId: item.shoeId,
                    ShoppingCartId: id,
                })
            }
        }

        // Actualizar la información del carrito
        await shoppingCart.update({ totalAmount })

        return res
            .status(200)
            .json({ message: 'Carrito actualizado con éxito', shoppingCart })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: error.message,
        })
    }
}
