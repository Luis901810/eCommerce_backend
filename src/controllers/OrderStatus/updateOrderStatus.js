const { OrderStatus } = require('../../db');

const updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        // const { status, description } = req.body;

        const [updated] = await OrderStatus.update({...req.body}, {
            where: { id }
        });

        if (!updated) {
            throw new Error('OrderStatus not found');
        }

        const updatedOrderStatus = await OrderStatus.findOne({ where: { id } });

        return res.status(200).json(updatedOrderStatus);
    } catch (error) {
        return res.status(500).json({ error: `There was an error processing your request : ${error.message}` });
    }
};

module.exports = updateOrderStatus;