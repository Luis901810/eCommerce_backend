const { Order, OrderLine, OrderStatus, User, Shoe } = require('../../db');

const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'name', 'email']
                },
                {
                    model: OrderStatus,
                    attributes: ['id', 'status']
                },
                {
                    model: OrderLine,
                    include: [
                        {
                            model: Shoe,
                            attributes: ['id', 'name', 'price']
                        }
                    ]
                }
            ]
        });

        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ error: `There was an error processing your request : ${error.message}` });
    }
};

module.exports = getOrders;