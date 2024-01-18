const { OrderStatus } = require('../../../db')
const data = [
    {
        status: 'Rejected',
        description: 'La compra ha sido rechazada. Por favor, revise la información proporcionada.',
    },
    {
        status: 'Approved',
        description: 'La compra ha sido aprobada. ¡Gracias por su transacción exitosa!',
    },
    {
        status: 'Pending',
        description: 'La compra está pendiente de revisión. Por favor, espere la confirmación.',
    },
    // {
    //     status: 'Test',
    //     description: 'Este estado es de prueba.',
    // },
]

module.exports = async () => {
    try {
        // Insertar status si no existe
        await Promise.all(
            data.map(async ({ status, description }) => {
                await OrderStatus.findOrCreate({
                    where: { status },
                    defaults: {
                        description,
                    },
                })
            }),
        )

        console.log('Estados de la orden insertados correctamente.')
    } catch (error) {
        console.error('Error al insertar estados de la orden:', error)
    }
}
