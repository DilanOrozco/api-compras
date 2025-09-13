const express = require('express');
const Router = express.Router()
const clientesControllers = require('../controllers/clientes/clientesControllers')

Router.post('/', clientesControllers.createCliente)
Router.get('/', clientesControllers.getClientes)
Router.get('/:id', clientesControllers.getClienteById)
Router.put('/:id', clientesControllers.updateCliente)
Router.delete('/:id', clientesControllers.deleteCliente)

module.exports = Router