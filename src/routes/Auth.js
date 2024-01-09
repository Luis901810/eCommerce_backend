const { Router } = require('express')
const verifyToken = require('../controllers/Auth/verifyToken')
const router = Router()

router.get('/me', verifyToken, require('../controllers/Auth/me'))
router.post('/login', require('../controllers/Auth/login'))

module.exports = router
