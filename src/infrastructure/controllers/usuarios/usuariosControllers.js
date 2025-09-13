const UsuariosRepositoryModel = require('../../repositories/UsuariosRepositoryModel')
const GetUsuarios = require('../../../application/use-cases/usuarios/GetUsuarios')
const CreateUsuario = require('../../../application/use-cases/usuarios/CreateUsuario')
const GetUsuarioByEmail = require('../../../application/use-cases/usuarios/GetUsuarioByEmail')
const UpdateUsuario = require('../../../application/use-cases/usuarios/UpdateUsuario')
const DeleteUsuario = require('../../../application/use-cases/usuarios/DeleteUsuario')

const usuariosRepository = new UsuariosRepositoryModel;

const getUsuarios = async (req, res) => {
    try {
        const getUsuariosUC = new GetUsuarios(usuariosRepository)
        const usuarios = await getUsuariosUC.execute()
        return res.json(usuarios)
    }catch(err){
        return res.status(500).json({Error : err.message})
    }
    
}

const createUsuario = async (req, res) => {
    try {
        const createUsuarioUC = new CreateUsuario(usuariosRepository);
        const usuario = await createUsuarioUC.execute(req.body);
        return res.status(201).json(usuario)
    } catch (err) {
        return res.status(500).json({ Error: err.message })
    }
}

const getUsuarioByEmail = async(req, res) =>{
    try{
        const getUsuarioByEmailUC = new GetUsuarioByEmail(usuariosRepository);
        const usuario = await getUsuarioByEmailUC.execute(req.params.email)
        if(!usuario) return res.status(404).json({Error:'usuario no encontrado'})
        return res.json(usuario)
    }catch(err){
        res.status(500).json({Error : err.message})
    }
}

const updateUsuario = async(req, res) =>{
    try{
        const {id} = req.params
        const updateUsuarioUC = new UpdateUsuario(usuariosRepository);
        const actualizado = await updateUsuarioUC.execute(id, req.body, {new : true})
        return res.json(actualizado)
    }catch(err){
        return res.status(500).json({Error : err.message})
    }
}

const deleteUsuario = async(req, res) =>{
    try{
        const deleteUsuarioUC = new DeleteUsuario(usuariosRepository);
        const eliminado = await  deleteUsuarioUC.execute(req.params.id);
        if(!eliminado) return res.status(404).json({Error : 'usuario no encontrado'})
            return res.json(eliminado)
    }catch(err){
        res.status(500).json({Error: err.message})
    }
}

module.exports = { getUsuarios, createUsuario, getUsuarioByEmail, updateUsuario, deleteUsuario }