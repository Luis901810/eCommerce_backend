const createUser = require('../../handlers/User/createUser')
const jwt = require('jsonwebtoken')
const { sendMail } = require('../../utils/email')

module.exports = async (req, res) => {
    try {
        // Create User
        const {
            user: newUser,
            error,
            msg,
        } = await createUser({
            ...req.body,
            requiredUserName: req.body.requiredUserName !== false,
            requiredUserPassword: req.body.requiredUserPassword !== false,
            requiredPhoneNumber: req.body.requiredPhoneNumber !== false,
            includeDeleted: req.body.includeDeleted || false,
        })
        if (error) return res.status(400).json({ error: msg })

        // Generate Session Token
        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24 * 6,
        })

        // Enviar Correo Electrónico de Bienvenida
        const welcomeMessage = `
        <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #333;">Bienvenido a nuestro sitio. Gracias por registrarte, ${newUser.name}!</h1>
            <p style="color: #555; font-size: 16px;">Gracias por registrarte en nuestro increíble sitio. Estamos emocionados de tenerte con nosotros.</p>
            <p style="color: #555; font-size: 16px;">¡Esperamos que disfrutes de tu tiempo en nuestra plataforma!</p>
        </div>
      `

        console.log('Sending welcome email to:', newUser.email)

        await sendMail(newUser.email, '¡Bienvenido!', welcomeMessage)

        // Return Response
        res.status(201).json({
            auth: true,
            token,
            user: newUser,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
