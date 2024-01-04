const { Router } = require('express')
const router = Router()

router.post('/', require('../controllers/MercadoPago/MercadoPago'))

module.exports = router