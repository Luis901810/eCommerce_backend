const { UserReview } = require('../../db')

module.exports = async (req, res) => {
    try {
        // Datos necesarios para crear la revisión
        const { orderLineId, comment, rating, userId } = req.body

        // Crear la revisión de usuario
        const userReview = await UserReview.create({
            orderLineId,
            comment,
            rating,
            userId,
            reviewDate: new Date(), // Asignar la fecha actual como fecha de revisión
        })

        res.status(201).json({ userReview }) // Devolver la revisión creada
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
