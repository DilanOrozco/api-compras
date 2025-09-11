const express = require('express')
const Router = express.Router()
const comprasControllers = require('../controllers/comprasControllers')

Router.get('/', comprasControllers.getCompras);
Router.post('/', comprasControllers.createCompra)
Router.get('/:id', comprasControllers.getCompraById)
Router.put('/:id', comprasControllers.updateCompra)
Router.delete('/:id', comprasControllers.deleteCompra)

module.exports = Router