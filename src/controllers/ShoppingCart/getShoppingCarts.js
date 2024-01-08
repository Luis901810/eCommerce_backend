const { User, ShoppingCart, ShoppingCartItem, Shoe } = require('../../db')

module.exports = async (req, res) => {
    try {
        const options = {
            include: [
                {
                    model: User,
                    attributes: ['id', 'name', 'email'],
                },
                {
                    model: ShoppingCartItem,
                    include: [
                        {
                            model: Shoe,
                            attributes: ['id', 'name', 'price'],
                        },
                    ],
                },
            ],
        }
        const shoppingCarts = await ShoppingCart.findAll(options)
        return res.status(201).json({ shoppingCarts })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: error.message,
        })
    }
}
