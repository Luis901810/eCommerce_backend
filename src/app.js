const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./routes')
const cors = require('cors')

const server = express()
server.name = 'ecommerce-api'
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
server.use(bodyParser.json({ limit: '50mb' }))
server.use(cookieParser())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())
server.use('/', router)

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500
    const message = err.message || err
    console.error(err)
    res.status(status).send(message)
})

module.exports = server
