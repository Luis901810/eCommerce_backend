const { Router } = require('express')

const router = Router()

router.use('/user', require('./User'))
router.use('/shoe', require('./Shoe'))
router.use((req, res) => {
    res.status(404).send(`Ruta no encontrada: ${req.method} ${req.originalUrl}`)
})

module.exports = router
