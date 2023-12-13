module.exports = async () => {
    try {
        // User
        await require('./User/Gender')()
        // Shoe
        await require('./Shoe/Gender')()

        console.log('Tablas revisadas y datos añadidos (*)')
    } catch (error) {
        console.error('Error añadiendo datos: ', error)
    }
}
