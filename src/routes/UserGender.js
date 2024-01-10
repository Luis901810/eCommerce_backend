const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/UserGender/get'))

module.exports = router
