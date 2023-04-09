const express = require('express')

const { getDataAll, adddata, deletedata } = require('../controller/dataCtrl')

const routes = express.Router()


routes.post('/adddata', adddata)
routes.get('/getdata', getDataAll)
routes.delete('/:id', deletedata)


// routes.post('/login', loginusers)


module.exports = routes