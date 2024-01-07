const { Router } = require('express')
const router = Router()

router.post('/', require('../controllers/ShoppingCart/createShoppingCart'))

module.exports = router
