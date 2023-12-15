const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/ShoeGender/getShoeGender'))

module.exports = router
