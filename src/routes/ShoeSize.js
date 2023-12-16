const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/ShoeSize/getShoeSize'))

module.exports = router
