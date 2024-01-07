const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/ShoppingCart/getShoppingCarts'))
router.post('/', require('../controllers/ShoppingCart/createShoppingCart'))
router.put('/:id', require('../controllers/ShoppingCart/updateShoppingCart'))
router.delete('/:id', require('../controllers/ShoppingCart/deleteShoppingCart'))

module.exports = router
