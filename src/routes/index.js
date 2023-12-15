const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send('Bienvenidos al Backend de Tienda de Zapatos con fines de estudios de Henry')
})

// ------------     Routes      --------------------

router.use('/user', require('./User'))
router.use('/user-rol', require('./UserRol'))
router.use('/shoe', require('./Shoe'))
router.use('/shoe-brand', require('./ShoeBrand'))
router.use('/shoe-material', require('./ShoeMaterial'))
router.use('/shoe-color', require('./ShoeColor'))
router.use('/shoe-category', require('./ShoeCategory'))
router.use('/shoe-gender', require('./ShoeGender'))
router.use('/shoe-size', require('./ShoeSize'))

// -------------------------------------------------

router.use((req, res) => {
    res.status(404).send(`Ruta no encontrada: ${req.method} ${req.originalUrl}`)
})

module.exports = router
