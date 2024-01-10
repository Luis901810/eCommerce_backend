const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/UserStatus/getStatuses'))

module.exports = router
