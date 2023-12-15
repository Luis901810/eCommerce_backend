const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/ShoeMaterial/getShoeMaterial'))

module.exports = router
