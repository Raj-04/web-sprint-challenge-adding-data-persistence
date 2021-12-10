const express = require('express')

const server = express()

server.use(express.json())

server.use('*', (req, res, next) => {
  next({
    status: 404,
    message: 'This endpoint does not exist'
  })
})

server.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.message
  })
})

module.exports = server
