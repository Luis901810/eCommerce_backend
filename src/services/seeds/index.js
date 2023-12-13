module.exports = async () => {
    try {
        // User
        await require('./User/Gender')()
        await require('./User/Status')()
        await require('./User/Rol')()
        await require('./User')()
        // Shoe
        await require('./Shoe/Gender')()

        console.log('Tablas revisadas y datos añadidos (*)')
    } catch (error) {
        console.error('Error añadiendo datos: ', error)
    }
}
