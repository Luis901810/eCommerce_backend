const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ft42b.pf05@gmail.com',
        pass: 'ngyf qnwx fqqi skqo',
    },
})

const sendMail = async (to, subject, html) => {
    let mailOptions = {
        from: 'ft42b.pf05@gmail.com',
        to,
        subject,
        html,
    }

    try {
        const response = await transporter.sendMail(mailOptions)
        return response
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error)
        throw error
    }
}

module.exports = { sendMail }
