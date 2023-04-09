const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const colors = require('colors')
const DB = require('./config/connetDb')
const { usererrHandel } = require('./middleware/stuckMiddleware')
const userroute = require('./routes/userRoutes')
const dataRoutes = require('./routes/dataRoutes')

const port = process.env.PORT

const app = express()
DB()
app.use(cors())
app.use(cors({ origin: "*" }))
app.use(usererrHandel)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', userroute)
app.use('/data', dataRoutes)


app.listen(port, () => {
    console.log(`connting server ${port}`);
})