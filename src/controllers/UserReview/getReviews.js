const { UserReview, OrderLine, Shoe } = require('../../db')

module.exports = async (req, res) => {
    try {
        const { userId } = req.body
        const { shoeId } = req.params

        const reviewOptions = {
            where: { deletedAt: null },
            include: [
                {
                    model: OrderLine,
                    include: [{ model: Shoe, attributes: ['id', 'name', 'price'] }],
                },
            ],
        }

        // Filtrar reviews por userId
        if (userId) {
            reviewOptions.where.userId = userId
        }

        // Obtener todas las revisiones de usuario
        let reviews = await UserReview.findAll(reviewOptions)

        // Filtrar por shoeId
        if (shoeId) {
            reviews = reviews.filter(review => review.OrderLine.shoeId === shoeId)
        }

        res.status(200).json({ reviews })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
