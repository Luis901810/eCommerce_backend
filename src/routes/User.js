const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/User/getUsers'))
router.post('/', require('../controllers/User/createUser'))

module.exports = router
