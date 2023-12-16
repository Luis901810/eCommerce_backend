const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/UserAuthMethod/getUserAuthMethod'))

module.exports = router
