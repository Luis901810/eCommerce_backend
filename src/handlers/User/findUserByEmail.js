const { User } = require('../../db')

module.exports = async (userEmail, includeDeleted = false) => {
    const options = { where: { email: userEmail } }
    if (!includeDeleted) { options.where.deletedAt = null }
    return await User.findOne(options)
}
