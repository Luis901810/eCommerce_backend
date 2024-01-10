const mercadopago = require('mercadopago')

//!Credenciales del .env
const ACCESS_TOKEN =
    'TEST-7120791930180798-112715-b8bed09589c90708ab8b212544f746b9-1555519585'
const URL_FRONT = process.env.URL_FRONT || 'http://localhost:3000/'

mercadopago.configure({
    access_token: ACCESS_TOKEN || '',
})

module.exports = async (req, res) => {
    const ArrayOrder = req.body
    const ProductsOrder = ArrayOrder.map(
        (
            item, //! EL ARRAY DEL BODY LISTO PARA LA ORDEN
        ) => ({
            id: item.id, //!Toca esperar a que tengan ID
            category_id: '',
            currency_id: 'USD',
            description: item.description,
            title: item.name,
            quantity: item.quantity, //!Pilas con la cantidad
            unit_price: Math.round(item.price),
        }),
    )
    //console.log(ProductsOrder)

    try {
        const preferences = {
            items: ProductsOrder,

            back_urls: {
                success: `${URL_FRONT}Successes`,
                //Retorna esto si está mal
                failure: `${URL_FRONT}Failures`,
            },

            auto_return: 'approved',
        }

        const response = await mercadopago.preferences.create(preferences)
        // console.log('ENVIO:', response) //Para ver la respuesta completa
        // console.log('ITEMS:', response.body.items) //Para ver los items
        console.log('ID COMPRA:', response.body.id)
        //res.status(200).json(response);//! Esta respuesta me trae tooooda la informacion de la venta
        res.status(200).json(response.response.init_point) //! para la URL de pago
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}
