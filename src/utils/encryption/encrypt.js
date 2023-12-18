const bcrypt = require('bcryptjs')

module.exports = async (payload, saltRounds = 10) => {
    if (!payload) return payload
    const salt = await bcrypt.genSalt(saltRounds)
    return await bcrypt.hash(payload, salt)
}
