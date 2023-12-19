const { Router } = require('express')
const verifyToken = require('../controllers/AccessToken/verifyToken')
const router = Router()

router.get('/me', verifyToken, require('../controllers/AccessToken/me'))
router.get('/login', require('../controllers/AccessToken/login'))

module.exports = router
