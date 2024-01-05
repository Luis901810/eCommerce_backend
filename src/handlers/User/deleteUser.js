const { User } = require('../../db')

module.exports = async (deleteOptions, hardDelete = false) => {
    // Find existing user
    if (!hardDelete) deleteOptions.where.deletedAt = null
    const user = await User.findOne(deleteOptions)
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
