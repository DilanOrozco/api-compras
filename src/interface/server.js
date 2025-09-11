const express = require('express')
const cors = require('cors')
const comprasRoute = require('../infrastructure/routes/comprasRoutes')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/compras', comprasRoute)

module.exports = app