const { UserReview } = require('../../db')

module.exports = async (req, res) => {
    try {
        const reviewId = req.params.id // Obtener el ID de la revisión de la solicitud
        const { comment, rating } = req.body // Nuevos datos de comentario y rating

        // Buscar la revisión de usuario por su ID
        const review = await UserReview.findByPk(reviewId)

        if (!review) {
            return res.status(404).json({ error: 'Revisión no encontrada' })
        }

        // Actualizar el comentario y la calificación de la revisión
        await review.update({ comment, rating })

        res.status(200).json({ message: 'Revisión actualizada exitosamente' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
