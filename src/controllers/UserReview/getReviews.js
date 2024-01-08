const { UserReview } = require('../../db')

module.exports = async (req, res) => {
    try {
        // Solo traer reviews no eliminadas
        const options = { where: { deletedAt: null } }

        // Obtener todas las revisiones de usuario
        const reviews = await UserReview.findAll(options)

        res.status(200).json({ reviews })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
