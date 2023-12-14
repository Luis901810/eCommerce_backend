const { ShoeBrand } = require('../../db')

module.exports = async (options = {}) => {
    try {
        return await ShoeBrand.findAll(options)
    } catch (error) {
        console.log('Error fetching ShoeBrand: ', error)
        throw new Error('Error fetching ShoeBrand')
    }
}
