const createUser = require('../../handlers/User/createUser')
const jwt = require('jsonwebtoken')
const { sendMail } = require('../../utils/email')
const { generateWelcomeMessage } = require('../../utils/welcomeMail')

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

        // Generate and send email
        const welcomeMessage = generateWelcomeMessage(newUser.name)
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
