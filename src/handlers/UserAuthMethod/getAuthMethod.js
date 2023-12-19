const { UserAuthMethod } = require('../../db')

module.exports = async (options = {}) => {
    try {
        return await UserAuthMethod.findAll(options)
    } catch (error) {
        console.log('Error fetching UserAuthMethod: ', error)
        throw new Error('Error fetching UserAuthMethod')
    }
}
