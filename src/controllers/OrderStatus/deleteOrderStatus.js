const { OrderStatus } = require('../../db');

const deleteOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await OrderStatus.destroy({
            where: { id }
        });

        if (!deleted) {
            throw new Error('OrderStatus not found');
        }

        return res.status(204).send("OrderStatus deleted");
    } catch (error) {
        return res.status(500).json({ error: `There was an error processing your request : ${error.message}` });
    }
};

module.exports = deleteOrderStatus;