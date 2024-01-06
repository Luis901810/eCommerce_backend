const { UserRol } = require('../../db')

module.exports = async (options = {}) => {
    try {
        return await UserRol.findAll(options)
    } catch (error) {
        console.log('Error fetching userRol: ', error)
        throw new Error('Error fetching userRol')
    }
}
