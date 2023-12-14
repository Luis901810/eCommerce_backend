const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/ShoeColor/getShoeColor'))

module.exports = router
