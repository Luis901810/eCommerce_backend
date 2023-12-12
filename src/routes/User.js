const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/User/getUsers'))
router.post('/', require('../controllers/User/createUser'))
router.put('/:id', require('../controllers/User/updateUser'))

module.exports = router
