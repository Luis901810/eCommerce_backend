const { ShoeGender } = require('../../db')

module.exports = async (options = {}) => {
    try {
        return await ShoeGender.findAll(options)
    } catch (error) {
        console.log('Error fetching ShoeGender: ', error)
        throw new Error('Error fetching ShoeGender')
    }
}
