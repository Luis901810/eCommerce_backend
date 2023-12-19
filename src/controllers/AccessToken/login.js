const EmailAuthenticator = require('../../handlers/Auth/EmailAuthenticator')
const EmailPasswordAuthenticator = require('../../handlers/Auth/EmailPasswordAuthenticator')

module.exports = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        // Use authenticator
        const usePassword = req.body.usePassword !== false
        const {
            error,
            token, auth, data
        } = usePassword
            ? await EmailPasswordAuthenticator(email, password)
            : await EmailAuthenticator(email)
        if (error) return res.status(400).json({ error })

        // Return Response
        res.status(201).json({ auth, token, data })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
