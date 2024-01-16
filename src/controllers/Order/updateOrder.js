const { Sequelize } = require('sequelize')
const { Order, OrderLine, Shoe } = require('../../db')

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params
        const { totalAmount, statusId } = req.body //! PIDO el statusID

        // Verificar que la orden existe
        const order = await Order.findByPk(id, {
            include: [
                {
                    model: OrderLine,
                    include: [
                        {
                            model: Shoe,
                            attributes: ['id', 'name', 'price'],
                        },
                    ],
                },
            ],
        })
        if (!order) {
            return res.status(404).json({ error: 'Order not found' })
        }

        if (statusId === '4567ffd5-8879-4455-9b06-b1cd23d3d0be') {
            Promise.all(
                order.OrderLines.map(async element => {
                    const { shoeId, quantity } = element
                    try {
                        console.log(shoeId, quantity)
                        const result = await Shoe.update(
                            {
                                stock: Sequelize.literal(`stock - ${quantity}`),
                            },
                            {
                                where: { id: shoeId },
                            },
                        )
                    } catch (error) {
                        return res.status(400).json({ error: `There was an error updating product: ${shoeId}` })
                    }
                }),
            ).then(() => {
                
              })
              .catch((error) => {
                return res.status(400).json({ error: `There was an error updating the OrderLine` })
              })
        }
        // Actualizar la orden
        await Order.update(
            { totalAmount, statusId }, //! PASO statusID
            {
                where: {
                    id,
                },
            },
        )

        return res.status(200).json({ message: 'Order updated successfully' })
    } catch (error) {
        return res.status(500).json({
            error: `There was an error processing your request : ${error.message}`,
        })
    }
}

module.exports = updateOrder
