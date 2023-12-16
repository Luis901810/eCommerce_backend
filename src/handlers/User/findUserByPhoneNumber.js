const { User } = require('../../db')

module.exports = async (userPhoneNumber, includeDeleted = false) => {
    const options = { where: { phoneNumber: userPhoneNumber } }
    if (!includeDeleted) { options.where.deletedAt = null }
    return await User.findOne(options)
}
