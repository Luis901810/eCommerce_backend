const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/UserStatus/get'))

module.exports = router
