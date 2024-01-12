const { Sequelize } = require('sequelize')
const { UserReview } = require('../../db')

const deleteReviews = async () => {
    try {
        const inconsistentReviews = await UserReview.findAll({
            // where: {
            //     // Definir la condición para encontrar datos inconsistentes
            //     orderLineId: {
            //         [Sequelize.Op.notIn]: Sequelize.literal('(SELECT id FROM "OrderLines")'),
            //     },
            // },
        })

        // Corregir datos inconsistentes o eliminar registros
        for (const review of inconsistentReviews) {
            // Realizar las correcciones necesarias, como actualizar o eliminar registros
            await review.destroy()
        }

        console.log('UserReviews eliminados')
    } catch (error) {
        console.error('Error eliminando UserReviews: ', error)
    }
}

module.exports = deleteReviews
deleteReviews() // ! Elimina las reviews
