const { User } = require('../../db')

module.exports = async (userId) => {
    // Find existing user
    const user = await User.findOne({
        where: {
            id: userId,
            deletedAt: null
        }
    })
    if (!user) { return { error: true, msg: 'Usuario no encontrado' } }

    // Soft delete
    await user.update({ deletedAt: new Date() })
    return { error: false }
}
