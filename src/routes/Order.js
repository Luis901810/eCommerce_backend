const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/Order/getOrder'))
router.post('/', require('../controllers/Order/createOrder'))
router.put('/:id', require('../controllers/Order/updateOrder'))
router.delete('/:id', require('../controllers/Order/deleteOrder'))

module.exports = router
