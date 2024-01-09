const { Router } = require('express')
const verifyToken = require('../controllers/Auth/verifyToken')
const router = Router()

router.get('/', verifyToken, require('../controllers/User/getUsers'))
router.get('/:id', require('../controllers/User/findOne'))
router.post('/', require('../controllers/User/createUser'))
router.put('/:id', require('../controllers/User/updateUser'))
router.delete('/:id', require('../controllers/User/deleteUser'))

module.exports = router
