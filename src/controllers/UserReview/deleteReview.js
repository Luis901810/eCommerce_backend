const { UserReview } = require('../../db')

module.exports = async (req, res) => {
    try {
        const reviewId = req.params.id // Obtener el ID de la revisión de la solicitud

        // Buscar la revisión de usuario por su ID
        const review = await UserReview.findByPk(reviewId)

        if (!review) {
            return res.status(404).json({ error: 'Revisión no encontrada' })
        }

        // Actualizar la revisión estableciendo deletedAt como la fecha actual
        await review.update({ deletedAt: new Date() })

        res.status(200).json({ message: 'Revisión eliminada exitosamente' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
