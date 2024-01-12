const mercadopago = require('mercadopago')
const { User } = require('../../db')
const { sendMail } = require('../../utils/email')

const ACCESS_TOKEN = 'TEST-7120791930180798-112715-b8bed09589c90708ab8b212544f746b9-1555519585'
const URL_FRONT = process.env.URL_FRONT || 'http://localhost:3000/'

mercadopago.configure({
    access_token: ACCESS_TOKEN || '',
})

module.exports = async (req, res) => {
    let user

    try {
        const ArrayOrder = req.body
        const ProductsOrder = ArrayOrder.map(item => ({
            id: item.id,
            category_id: '',
            currency_id: 'USD',
            description: item.description,
            title: item.name,
            quantity: item.quantity,
            unit_price: Math.round(item.price),
        }))

        const preferences = {
            items: ProductsOrder,
            back_urls: {
                success: `${URL_FRONT}Successes`,
                failure: `${URL_FRONT}Failures`,
            },
            auto_return: 'approved',
        }

        console.log('Preferencias:', preferences)

        const response = await mercadopago.preferences.create(preferences)

        console.log('Respuesta de MercadoPago:', response)

        if (response && response.response && response.response.init_point) {
            // Envía la URL de pago al cliente
            res.status(200).json(response.response.init_point)

            // Obtiene el ID del usuario desde la solicitud
            const userId = req.body.userId

            // Busca al usuario en la base de datos
            user = await User.findByPk(userId)

            if (user) {
                // Envía un correo electrónico al usuario después de una compra exitosa
                const successMessage = `
                    Gracias por tu compra en nuestro sitio.
                    Estado de la compra: Aprobada
                    ¡Gracias por elegirnos!
                `

                try {
                    await sendMail(user.email, 'Compra Aprobada', successMessage)
                    console.log('Correo electrónico de compra aprobada enviado con éxito.')
                } catch (emailError) {
                    console.error('Error al enviar el correo electrónico de compra aprobada:', emailError)
                }
            }
        } else {
            // Manejo de errores al obtener la URL de pago
            return res.status(500).json({ error: 'Error al obtener la URL de pago.' })
        }
    } catch (error) {
        console.error(error)

        // Envía un correo electrónico al usuario después de una compra fallida
        if (user) {
            const failureMessage = `
                Tu compra en nuestro sitio ha fallado.
                Estado de la compra: Rechazada
                Por favor, inténtalo de nuevo o ponte en contacto con el soporte.
            `

            try {
                await sendMail(user.email, 'Compra Rechazada', failureMessage)
            } catch (emailError) {
                console.error('Error al enviar el correo electrónico:', emailError)
            }
        }

        return res.status(500).json({ error: error.message })
    }
}
