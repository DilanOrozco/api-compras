const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: [String],
        enum: ['admin', 'cliente', 'moderador'], // roles válidos
        default: ['cliente'], // rol por defecto
    },
    status: {
        type: String,
        enum: ['activo', 'inactivo'],
        default: 'activo',
    },
}, {
    timestamps: true,
});

const UsuarioModel = mongoose.model('Usuario', usuarioSchema);

class UsuariosRepositoryModel {

    async find() {
        return await UsuarioModel.find()
    }

    async create(data) {
        const usuario = new UsuarioModel(data)
        return await usuario.save()
    }
    async findByEmail(email) {
        return await UsuarioModel.findOne({ email })
    }

    async update(id, data){
        return await UsuarioModel.findByIdAndUpdate(id, data);
    }

    async delete(id){
        return await UsuarioModel.findByIdAndDelete(id)
    }
}

module.exports = UsuariosRepositoryModel