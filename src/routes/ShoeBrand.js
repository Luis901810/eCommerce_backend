const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/ShoeBrand/getShoeBrand'))

module.exports = router
