const express = require('express')
const { registerUser, loginusers } = require('../controller/userCtrl')

const routes = express.Router()


routes.post('/register', registerUser)
routes.post('/login', loginusers)


module.exports = routes