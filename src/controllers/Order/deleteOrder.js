const { Order } = require('../../db')

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params

        // Verificar que la orden existe
        const order = await Order.findByPk(id)

        if (!order) {
            return res.status(404).json({ error: 'Order no encontrada' })
        }

        // Eliminar la order
        await order.update({ deletedAt: new Date() })

        return res.status(200).json({ message: 'Order eliminada exitosamente' })
    } catch (error) {
        // Revertir la transacción en caso de error
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

module.exports = deleteOrder
