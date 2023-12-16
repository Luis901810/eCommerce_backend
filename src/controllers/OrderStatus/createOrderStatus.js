const { OrderStatus } = require('../../db');

const createOrder = async (req, res) => {
    try {
        const { status, description } = req.body;

        if (!status || !description) {
            return res.status(404).json({ error: 'Data incomplete' });
        }

        // Crear el status de la orden
        const newOrderStatus = await OrderStatus.create({ status, description });

        if (newOrderStatus) {
            return res.status(201).json(newOrderStatus);
        }

        return res.status(500).json({ error: 'Error while creating Order Status' });
    } catch (error) {
        return res.status(500).json({ error: `There was an error processing your request : ${error.message}` });
    }
};

module.exports = createOrder;