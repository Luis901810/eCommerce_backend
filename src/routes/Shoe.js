const { Router } = require('express')
const router = Router()

router.use('/brand', require('./Shoe/Brand'))
router.use('/category', require('./Shoe/Category'))
router.use('/color', require('./Shoe/Color'))
router.use('/gender', require('./Shoe/Gender'))
router.use('/material', require('./Shoe/Material'))
router.use('/size', require('./Shoe/Size'))

router.get('/', require('../controllers/Shoe/getShoe'))
router.get('/:id', require('../controllers/Shoe/getShoeById'))
router.post('/', require('../controllers/Shoe/createShoe'))
router.put('/:id', require('../controllers/Shoe/updateShoe'))
router.delete('/:id', require('../controllers/Shoe/deleteShoe'))





module.exports = router
