const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/Shoe/getShoe'))
router.get('/:id', require('../controllers/Shoe/getShoeById'))
router.post('/', require('../controllers/Shoe/createShoe'))
router.put('/:id', require('../controllers/Shoe/updateShoe'))
router.delete('/:id', require('../controllers/Shoe/deleteShoe'))


module.exports = router
