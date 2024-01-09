const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    const token = req.header('x-access-token')
    if (!token) return res.status(401).json({ error: 'Unauthorized' })
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userRole = decoded.role
    req.userId = decoded.id
    next()
}
