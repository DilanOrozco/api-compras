const express = require('express')
const cors = require('cors')
const comprasRoutes = require('../infrastructure/routes/comprasRoutes')
const usuariosRoutes = require('../infrastructure/routes/usuariosRotes')
const clientesRoutes = require('../infrastructure/routes/clientesRoutes')
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/compras', comprasRoutes)
app.use('/api/usuarios',usuariosRoutes )
app.use('/api/clientes', clientesRoutes)

module.exports = app