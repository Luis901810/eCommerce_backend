// FORMATO DE LA PETICION

/*
{
    "totalAmount": 1905.24,
    "statusId": "c3465519-3528-4d0b-903b-3ed9b7051abb",
    "userId": "040aed01-19e8-4909-9237-d457859570de",
    "lines": [
        {
            "quantity": 2,
            "unitPrice": 594.37,
            "discount": 0,
            "shoeId": "5f4597b9-bb5a-46e7-be94-d1af8208e524"
        },
        {
            "quantity": 1,
            "unitPrice": 716.50,
            "discount": 0,
            "shoeId": "3930e6f4-6edd-4f55-9ca9-4a5c2b8f7941"
        }
    ]
}
*/

const { Order, OrderLine, OrderStatus, User, Shoe } = require('../../db')

const createOrder = async (req, res) => {
    try {
        const { totalAmount, lines, statusId, userId } = req.body

        // Verificar que el usuario existe
        const user = await User.findByPk(userId)
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        // Verificar que el estado de la orden existe
        const orderStatus = await OrderStatus.findByPk(statusId)
        if (!orderStatus) {
            return res.status(404).json({ error: 'Order status not found' })
        }

        // Crear la orden
        const newOrder = await Order.create({ totalAmount, statusId, userId })

        // Crear las líneas de la orden y asociar los zapatos
        const newLines = [] // ! Para enviar las lineas en la response
        for (let line of lines) {
            const { quantity, unitPrice, discount, shoeId } = line

            // Verificar que el zapato existe
            const shoe = await Shoe.findByPk(shoeId)
            if (!shoe) {
                return res.status(404).json({ error: `Shoe with id ${shoeId} not found` })
            }

            const newLine = await OrderLine.create({
                orderId: newOrder.id,
                quantity,
                unitPrice,
                discount,
                shoeId,
            })

            newLines.push(newLine)
        }

        return res.status(201).json({ ...newOrder.dataValues, newLines })
        // return res.status(201).json(newOrder)
    } catch (error) {
        return res.status(500).json({ error: `There was an error processing your request : ${error.message}` })
    }
}

module.exports = createOrder