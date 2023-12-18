const { Order } = require('../../db');

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar que la orden existe
        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        // Eliminar la orden
        await Order.destroy({
            where: {
                id: id
            }
        });

        return res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: `There was an error processing your request : ${error.message}` });
    }
};

module.exports = deleteOrder;