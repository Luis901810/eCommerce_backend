const { User } = require('../../db')
const findUserByEmail = require('./findUserByEmail')
const findUserByPhoneNumber = require('./findUserByPhoneNumber')

module.exports = async (userData) => {
    // Validate Required User Data
    const {
        name,
        email,
        phoneNumber,
        password,
        requiredUserName,
        requiredUserPassword,
        includeDeleted
    } = userData
    if (requiredUserName && !name) {
        return { error: true, msg: 'Usuario debe tener un nombre.' }
    }
    if (requiredUserPassword && !password) {
        return { error: true, msg: 'Usuario debe tener una contraseña.' }
    }
    if (!email) {
        return { error: true, msg: 'Usuario debe tener un email.' }
    }

    // Validate Existing User
    const [
        userFoundByEmail,
        userFoundByPhoneNumber
    ] = await Promise.all([
        await findUserByEmail(email, includeDeleted),
        phoneNumber && await findUserByPhoneNumber(phoneNumber, includeDeleted)
    ])
    if (userFoundByEmail) {
        return { error: true, msg: 'El email ya existe.' }
    }
    if (userFoundByPhoneNumber) {
        return { error: true, msg: 'El número de teléfono ya existe.' }
    }

    // TODO: Encrypt password
    // Create User
    const newUser = await User.create(userData)

    // TODO: Create Token
    // Return Data
    return { error: false, user: newUser }
}
