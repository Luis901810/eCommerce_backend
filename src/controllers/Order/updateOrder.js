const { Order } = require('../../db');

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { totalAmount } = req.body;

        // Verificar que la orden existe
        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        // Actualizar la orden
        await Order.update({ totalAmount }, {
            where: {
                id: id
            }
        });

        return res.status(200).json({ message: 'Order updated successfully' });
    } catch (error) {
        return res.status(500).json({ error: `There was an error processing your request : ${error.message}` });
    }
};

module.exports = updateOrder;