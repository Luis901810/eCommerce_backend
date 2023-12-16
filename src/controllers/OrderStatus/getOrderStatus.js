const { OrderStatus } = require('../../db');

const getOrderStatus = async (req, res) => {
    try {
        const orderStatuses = await OrderStatus.findAll();

        return res.status(200).json(orderStatuses);
    } catch (error) {
        return res.status(500).json({ error: `There was an error processing your request : ${error.message}` });
    }
};

module.exports = getOrderStatus;