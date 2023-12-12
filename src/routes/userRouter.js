const { Router } = require('express')
const userRouter = Router()

userRouter.get('/', require('../controllers/User/getUsers'))
userRouter.post('/', require('../controllers/User/createUser'))
userRouter.put('/:id', require('../controllers/User/updateUser'))

module.exports = userRouter;
