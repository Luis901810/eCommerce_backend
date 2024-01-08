const { UserStatus } = require('../../db')

module.exports = async (options = {}) => {
    try {
        return await UserStatus.findAll(options)
    } catch (error) {
        console.log('Error fetching userStatus: ', error)
        throw new Error('Error fetching userStatus')
    }
}
