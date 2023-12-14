const { UserGender } = require('../../db')

module.exports = async (options = {}) => {
    try {
        return await UserGender.findAll(options)
    } catch (error) {
        console.log('Error fetching userGender: ', error)
        throw new Error('Error fetching userGender')
    }
}
