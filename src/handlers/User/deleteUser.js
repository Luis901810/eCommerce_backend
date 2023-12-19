const { User } = require('../../db')

module.exports = async (userId, hardDelete = false) => {
    // Find existing user
    const findOptions = { where: { id: userId } }
    if (!hardDelete) findOptions.where.deletedAt = null
    const user = await User.findOne(findOptions)
    if (!user) {
        return { error: true, msg: 'Usuario no encontrado' }
    }

    // Delete user
    if (hardDelete) {
        await user.destroy()
    } else {
        await user.update({ deletedAt: new Date() })
    }
    return { error: false }
}
