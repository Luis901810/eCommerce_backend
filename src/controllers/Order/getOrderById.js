const { Order, OrderLine, OrderStatus, User, Shoe } = require('../../db');

const getOrderById = async (req, res) => {
    try {
        const { id } = req.params
        const order = await Order.findByPk(id,{
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

        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json({ error: `There was an error processing your request : ${error.message}` });
    }
};

module.exports = getOrderById;