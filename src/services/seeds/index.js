;(async () => {
    try {
        // User
        await require('./User/Gender')()
        await require('./User/Status')()
        await require('./User/Rol')()
        await require('./User/authMethod')()
        // await require('./User')()
        // Shoe
        await require('./Shoe/Gender')()
        await require('./Shoe/Color')()
        await require('./Shoe/Size')()
        await require('./Shoe/Brand')()
        await require('./Shoe/Material')()
        await require('./Shoe/Category')()
        await require('./Shoe')()
    } catch (error) {
        console.error('Error añadiendo datos: ', error)
    }
})()
