const { User } = require('../../db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = async (email, password) => {
    if (!email) return { error: 'Debe ingresar un email' }
    if (!password) return { error: 'Debe ingresar un password' }

    // Validate email
    const user = await User.findOne({ where: { email } })
    if (!user) return { error: 'El usuario o contraseña son incorrectos.' }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) return { error: 'El usuario o contraseña son incorrectos.' }

    // Generate Session Token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24 * 6
    })
    return { auth: true, token, data: user }
}
