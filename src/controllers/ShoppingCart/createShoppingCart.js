const { User, ShoppingCart, ShoppingCartItem } = require('../../db')

const createOrder = async (req, res) => {
    try {
        const { totalAmount, userId, items } = req.body

        // Verificar que el usuario existe
        const user = await User.findByPk(userId)
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' })
        }

        // Crear el carrito de compras
        const shoppingCart = await ShoppingCart.create({ totalAmount, userId })

        // Asociar zapatos al carrito de compras
        if (items && items.length > 0) {
            for (const item of items) {
                await ShoppingCartItem.create({
                    quantity: item.quantity,
                    unitPrice: item.unitPrice,
                    discount: item.discount,
                    shoeId: item.shoeId,
                    ShoppingCartId: shoppingCart.id,
                })
            }
        }

        return res.status(201).json({ shoppingCart })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: error.message,
        })
    }
}

module.exports = createOrder
