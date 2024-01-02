const { Router } = require('express')
const router = Router()

router.get('/', require('../../controllers/Shoe/Gender/get'))
// router.post('/', require('../controllers/User/createUser'))
// router.put('/:id', require('../controllers/User/updateUser'))
// router.delete('/:id', require('../controllers/User/deleteUser'))

module.exports = router