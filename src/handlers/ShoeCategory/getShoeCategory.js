const { ShoeCategory } = require('../../db')

module.exports = async (options = {}) => {
    try {
        return await ShoeCategory.findAll(options)
    } catch (error) {
        console.log('Error fetching ShoeCategory: ', error)
        throw new Error('Error fetching ShoeCategory')
    }
}
