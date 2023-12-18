const { Router } = require('express')
const router = Router()

router.get('/me', require('../controllers/AccessToken/me'))

module.exports = router
