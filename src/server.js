const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mainRouter = require('./routes/mainRouter')
const cors = require('cors')

const server = express()

server.use(cors({
    origin: ['http://localhost:3000', "https://storecalzado.vercel.app"],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  }));

server.name = 'ecommerce-api'
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
server.use(bodyParser.json({ limit: '50mb' }))
server.use(cookieParser())
server.use(morgan('dev'))
server.use(express.json())
server.use('/', mainRouter)

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500
    const message = err.message || err
    console.error(err)
    res.status(status).send(message)
})

module.exports = server
