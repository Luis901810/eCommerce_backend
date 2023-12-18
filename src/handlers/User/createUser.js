const { User } = require('../../db')
const findUserByEmail = require('./findUserByEmail')
const findUserByPhoneNumber = require('./findUserByPhoneNumber')

module.exports = async (payload) => {
    const {
        name,
        email,
        phoneNumber,
        password,
        birthDate,
        profilePicture,
        roleId,
        genderId,
        statusId,
        authMethodId,
        requiredUserName,
        requiredUserPassword,
        requirePhoneNumber,
        includeDeleted
    } = payload

    // Create User Data
    const userData = {}
    if (requiredUserName) {
        if (!name) { return { error: true, msg: 'Usuario debe tener un nombre.' } }
        userData.name = name
    }
    if (requiredUserPassword) {
        if (!password) return { error: true, msg: 'Usuario debe tener una contraseña.' }
        userData.password = password
    }

    // Validate Existing User
    const [
        userFoundByEmail,
        userFoundByPhoneNumber
    ] = await Promise.all([
        await findUserByEmail(email, includeDeleted),
        await findUserByPhoneNumber(phoneNumber, includeDeleted)
    ])
    if (requirePhoneNumber) {
        if (!phoneNumber) { return { error: true, msg: 'Usuario debe tener un número de teléfono.' } }
        if (userFoundByPhoneNumber) return { error: true, msg: 'El número de teléfono ya existe.' }
        userData.phoneNumber = phoneNumber
    }
    if (!email) return { error: true, msg: 'Usuario debe tener un email.' }
    if (email) {
        if (userFoundByEmail) return { error: true, msg: 'El email ya existe.' }
        userData.email = email
    }
    userData.birthDate = birthDate
    userData.profilePicture = profilePicture
    userData.roleId = roleId
    userData.genderId = genderId
    userData.statusId = statusId
    userData.authMethodId = authMethodId

    // Create User
    const newUser = await User.create(userData)

    // Return Data
    return { error: false, user: newUser }
}
