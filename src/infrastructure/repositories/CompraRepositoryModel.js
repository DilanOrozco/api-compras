const mongoose = require('mongoose');

/**
 * Subdocumento que representa un ítem dentro de una compra.
 * 
 * @typedef {Object} Item
 * @property {string} producto - Nombre del producto.
 * @property {number} cantidad - Cantidad del producto.
 * @property {number} precio - Precio unitario del producto.
 */
const ItemSchema = new mongoose.Schema({
    producto: { type: String, required: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true }
});

/**
 * Documento que representa una compra en la base de datos.
 * 
 * @typedef {Object} Compra
 * @property {string} cliente - Nombre del cliente.
 * @property {string} telefono - Teléfono del cliente.
 * @property {Date} fecha - Fecha de la compra.
 * @property {Item[]} items - Lista de productos comprados.
 * @property {boolean} domicilio - Indica si la compra tiene domicilio.
 * @property {Object} direccion - Dirección de entrega (opcional).
 * @property {string} [direccion.calle] - Calle de la dirección.
 * @property {string} [direccion.ciudad] - Ciudad de la dirección.
 * @property {number} total - Total de la compra.
 */
const CompraSchema = new mongoose.Schema({
    cliente: { type: String, required: true },
    telefono: { type: String, required: true },
    fecha: { type: Date, default: Date.now },
    items: [ItemSchema],
    domicilio: { type: Boolean, default: false },
    direccion: {
        calle: { type: String },
        ciudad: { type: String }
    },
    total: { type: Number, required: true }
});

const CompraModel = mongoose.model('Compra', CompraSchema);

/**
 * Repositorio que implementa las operaciones CRUD para el modelo de Compra.
 * 
 * Esta clase abstrae la lógica de acceso a la base de datos,
 * facilitando su uso dentro de casos de uso en la arquitectura limpia.
 */
class CompraRepositoyModel {
    /**
     * Obtiene todas las compras.
     * @async
     * @returns {Promise<Compra[]>} Lista de compras.
     */
    async findAll() {
        return await CompraModel.find();
    }

    /**
     * Crea una nueva compra.
     * @async
     * @param {Compra} data - Datos de la compra a crear.
     * @returns {Promise<Compra>} Compra creada.
     */
    async create(data) {
        const compra = new CompraModel(data);
        return await compra.save();
    }

    /**
     * Busca una compra por su ID.
     * @async
     * @param {string} id - ID de la compra.
     * @returns {Promise<Compra|null>} Compra encontrada o `null` si no existe.
     */
    async findById(id) {
        return await CompraModel.findById(id);
    }

    /**
     * Actualiza una compra por su ID.
     * @async
     * @param {string} id - ID de la compra a actualizar.
     * @param {Partial<Compra>} data - Datos a actualizar.
     * @returns {Promise<Compra|null>} Compra actualizada o `null` si no existe.
     */
    async update(id, data) {
        return await CompraModel.findByIdAndUpdate(id, data, { new: true });
    }

    /**
     * Elimina una compra por su ID.
     * @async
     * @param {string} id - ID de la compra a eliminar.
     * @returns {Promise<Compra|null>} Compra eliminada o `null` si no existe.
     */
    async delete(id) {
        return await CompraModel.findByIdAndDelete(id);
    }
}

module.exports = CompraRepositoyModel;
