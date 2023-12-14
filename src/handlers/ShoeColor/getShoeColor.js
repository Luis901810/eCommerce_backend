const { ShoeColor } = require('../../db')

module.exports = async (options = {}) => {
    try {
        return await ShoeColor.findAll(options)
    } catch (error) {
        console.log('Error fetching ShoeColor: ', error)
        throw new Error('Error fetching ShoeColor')
    }
}
