const mongoose = require('mongoose');

/**
 * Esquema de cliente para MongoDB usando Mongoose.
 * Representa a un cliente con documento, nombre, email y whatsapp.
 */
const clienteSchema = new mongoose.Schema({
    documento: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    whatsapp: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const ClienteModel = mongoose.model('Cliente', clienteSchema);

/**
 * Repositorio para manejar operaciones CRUD sobre la colección de clientes.
 */
class ClientesRepositoryMongo {
    /**
     * Obtiene todos los clientes de la base de datos.
     * @returns {Promise<Array<Object>>} Lista de clientes.
     */
    async findAll() {
        return await ClienteModel.find();
    }

    /**
     * Busca un cliente por su ID.
     * @param {string} id - ID del cliente en MongoDB.
     * @returns {Promise<Object|null>} Cliente encontrado o null si no existe.
     */
    async findById(id) {
        return await ClienteModel.findById(id);
    }

    /**
     * Crea un nuevo cliente en la base de datos.
     * @param {Object} clienteData - Datos del cliente.
     * @param {string} clienteData.documento - Documento único del cliente.
     * @param {string} clienteData.nombre - Nombre del cliente.
     * @param {string} clienteData.email - Correo electrónico único del cliente.
     * @param {string} clienteData.whatsapp - Número de WhatsApp del cliente.
     * @returns {Promise<Object>} Cliente creado.
     */
    async create(clienteData) {
        const cliente = new ClienteModel(clienteData);
        return await cliente.save();
    }

    /**
     * Actualiza un cliente existente.
     * @param {string} id - ID del cliente a actualizar.
     * @param {Object} clienteData - Datos del cliente a actualizar.
     * @returns {Promise<Object|null>} Cliente actualizado o null si no existe.
     */
    async update(id, clienteData) {
        return await ClienteModel.findByIdAndUpdate(id, clienteData, { new: true });
    }

    /**
     * Elimina un cliente por su ID.
     * @param {string} id - ID del cliente a eliminar.
     * @returns {Promise<Object|null>} Cliente eliminado o null si no existe.
     */
    async delete(id) {
        return await ClienteModel.findByIdAndDelete(id);
    }
}

module.exports = ClientesRepositoryMongo;
