const { ID_APPROVED, ID_PENDING, ID_REJECTED } = require('./constants')
const { commonStyles, stylesByStatus } = require('./styles')

const generateTitle = (statusId, userName) => {
    switch (statusId) {
        case ID_PENDING:
            return `Gracias por tu compra en nuestro sitio.`
        case ID_APPROVED:
            return `Gracias por tu compra en nuestro sitio, ${userName}!`
        case ID_REJECTED:
            return `Lamentamos informarte que tu compra ha sido rechazada.`
        default:
            return 'Mensaje por defecto'
    }
}

const generateContent = (statusId, order) => {
    const orderLines = order.orderLines || []
    const productDetails = orderLines.map(line => {
        const shoe = line.Shoe || {}
        const discountedUnitPrice = parseFloat(line.unitPrice) - parseFloat(line.discount)
        return `
            <div style="margin-bottom: 20px; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                <p style="font-size: 16px; color: #333; margin: 0;">Producto: ${shoe.name}</p>
                <p style="font-size: 16px; color: #333; margin: 0;">Cantidad: ${line.quantity}</p>
                <p style="font-size: 16px; color: #333; margin: 0;">Precio unitario: $${discountedUnitPrice} ${shoe.price}</p>
                <p style="font-size: 16px; color: #333; margin: 0;">Descuento: $${line.discount}</p>
            </div>
        `
    })

    switch (statusId) {
        case ID_PENDING:
            return `
                Estado de la compra: Pendiente
                ${productDetails.join('')}
            `
        case ID_APPROVED:
            return `
                Estado de la compra: Aprobada
                ${productDetails.join('')}
            `
        case ID_REJECTED:
            return `
                Estado de la compra: Rechazada
                Por favor, ponte en contacto con nuestro equipo de soporte para obtener más información.
                ${productDetails.join('')}
            `
        default:
            return ''
    }
}

const generateThanksMessage = statusId => {
    switch (statusId) {
        case ID_PENDING:
        case ID_APPROVED:
            return '<strong>¡Gracias por elegirnos! DIGISHOES</strong>'
        case ID_REJECTED:
            return ''
        default:
            return ''
    }
}

const createOrderMessage = (statusId, userName, order) => {
    const title = generateTitle(statusId, userName)
    const content = generateContent(statusId, order)
    const thanksMessage = generateThanksMessage(statusId)

    const message = `
        <div style="${commonStyles} ${stylesByStatus[statusId]} padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <h1>${title}</h1>
            <p>${content}</p>
            <p>${thanksMessage}</p>
        </div>
    `

    return message
}

module.exports = createOrderMessage
