const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/UserRol/getUserRol'))
router.post('/', require('../controllers/UserRol/createUserRol'))
router.delete('/:id', require('../controllers/UserRol/deleteUserRol'))

module.exports = router
