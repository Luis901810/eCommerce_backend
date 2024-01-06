const { Router } = require('express')
const router = Router()

router.post('/', require('../controllers/UserReview/createReview'))

module.exports = router
