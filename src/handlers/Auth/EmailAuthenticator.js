const { User } = require('../../db')
const jwt = require('jsonwebtoken')

module.exports = async (email) => {
    if (!email) return { error: 'Debe ingresar un email' }

    // Validate existing user
    const user = await User.findOne({ where: { email } })
    if (!user) return { error: 'Usuario no registrado' }

    // Generate Session Token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24 * 6
    })
    return { auth: true, token, data: user }
}
