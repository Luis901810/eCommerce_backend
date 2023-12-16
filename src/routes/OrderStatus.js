const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/OrderStatus/getOrderStatus'))
router.post('/', require('../controllers/OrderStatus/createOrderStatus'))
router.put('/:id', require('../controllers/OrderStatus/updateOrderStatus'))
router.delete('/:id', require('../controllers/OrderStatus/deleteOrderStatus'))

module.exports = router