const { Router } = require('express')

const router = Router()

router.get('/test-hello', (req, res) => res.json('Hello World!'))
router.use((req, res) => {
    res.status(404).send(`Ruta no encontrada: ${req.method} ${req.originalUrl}`)
})

module.exports = router
