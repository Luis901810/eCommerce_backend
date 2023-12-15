const { ShoeMaterial } = require('../../db')

module.exports = async (options = {}) => {
    try {
        return await ShoeMaterial.findAll(options)
    } catch (error) {
        console.log('Error fetching ShoeMaterial: ', error)
        throw new Error('Error fetching ShoeMaterial')
    }
}
