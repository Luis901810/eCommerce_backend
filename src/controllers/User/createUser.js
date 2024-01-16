const createUser = require('../../handlers/User/createUser')
const jwt = require('jsonwebtoken')
const { sendMail } = require('../../utils/email/email')
const { generateWelcomeMessage } = require('../../utils/email/welcomeMail')

module.exports = async (req, res) => {
    try {
        // * Validar que creación de usuario requiere login
        req.body.login = req.body.login !== false // Login requerido por defecto

        // Create User
        const {
            user: newUser,
            error,
            msg,
            role, // * Requerido para crear el token
        } = await createUser({
            ...req.body,
            requiredUserName: req.body.requiredUserName !== false,
            requiredUserPassword: req.body.requiredUserPassword !== false,
            requiredPhoneNumber: req.body.requiredPhoneNumber !== false,
            includeDeleted: req.body.includeDeleted || false,
        })

        if (error) return res.status(400).json({ error: msg })

        // Generate and send email
        const welcomeMessage = generateWelcomeMessage(newUser.name)
        await sendMail(newUser.email, '¡Bienvenido!', welcomeMessage)

        if (req.body.login) {
            // Generate Session Token
            const token = jwt.sign({ id: newUser.id, role: role?.rol }, process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 24 * 6,
            })

            // Return Response
            res.status(201).json({
                auth: true,
                token,
                user: newUser,
            })
        } else {
            // Return user
            res.status(201).json({ user: newUser })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
