const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/ShoeCategory/getShoeCategory'))

module.exports = router
