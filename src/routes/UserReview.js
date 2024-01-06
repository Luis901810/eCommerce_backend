const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/UserReview/getReviews'))
router.post('/', require('../controllers/UserReview/createReview'))

module.exports = router
