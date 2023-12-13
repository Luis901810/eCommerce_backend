const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/Shoe/getShoe'))
router.post('/', require('../controllers/Shoe/createShoe'))

module.exports = router
