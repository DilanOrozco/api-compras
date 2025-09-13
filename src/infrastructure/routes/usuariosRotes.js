const express = require('express')
const Router = express.Router()
const usuariosControllers = require('../controllers/usuarios/usuariosControllers')

Router.get('/', usuariosControllers.getUsuarios)
Router.get('/:email', usuariosControllers.getUsuarioByEmail)
Router.post('/', usuariosControllers.createUsuario)
Router.put('/:id', usuariosControllers.updateUsuario)
Router.delete('/:id', usuariosControllers.deleteUsuario)

module.exports = Router