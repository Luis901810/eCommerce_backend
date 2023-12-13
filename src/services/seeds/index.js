module.exports = async () => {
    try {
        // User
        await require('./User/Gender')()
        // Shoe
        await require('./Shoe/Gender')()
        await require('./Shoe/Color')()
        await require('./Shoe/Size')()
        await require('./Shoe/Brand')()
        await require('./Shoe/Material')()
        await require('./Shoe/Category')()

        console.log('Tablas revisadas y datos añadidos (*)')
    } catch (error) {
        console.error('Error añadiendo datos: ', error)
    }
}
