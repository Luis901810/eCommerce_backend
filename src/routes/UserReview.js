const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/UserReview/getReviews'))
router.post('/', require('../controllers/UserReview/createReview'))
router.delete('/:id', require('../controllers/UserReview/deleteReview'))
router.put('/:id', require('../controllers/UserReview/updateReview'))

module.exports = router
