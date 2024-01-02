const { ShoeSize } = require('../../db')

module.exports = async (options = {}) => {
    try {
        return await ShoeSize.findAll(options)
    } catch (error) {
        console.log('Error fetching ShoeSize: ', error)
        throw new Error('Error fetching ShoeSize')
    }
}
