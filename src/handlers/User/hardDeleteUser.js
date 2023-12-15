const { User } = require('../../db')

module.exports = async (userId) => {
    // Find existing user
    const user = await User.findByPk(userId)
    if (!user) { return { error: true, msg: 'Usuario no encontrado' } }

    // Hard delete
    await user.destroy()
    return { error: false }
}
