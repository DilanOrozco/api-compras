/**
 * Caso de uso para actualizar un cliente.
 */
class UpdateCliente {
    /**
     * Inicializa el caso de uso con un repositorio de clientes.
     * @param {Object} clienteRepository - Repositorio que maneja la persistencia de clientes.
     * @param {Function} clienteRepository.update - Método para actualizar un cliente en la base de datos.
     */
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    /**
     * Ejecuta la actualización de un cliente por su ID.
     * @param {string} id - ID del cliente a actualizar.
     * @param {Object} clienteData - Datos a actualizar del cliente.
     * @param {string} [clienteData.documento] - Documento único del cliente.
     * @param {string} [clienteData.nombre] - Nombre del cliente.
     * @param {string} [clienteData.email] - Correo electrónico único del cliente.
     * @param {string} [clienteData.whatsapp] - Número de WhatsApp del cliente.
     * @returns {Promise<Object|null>} Cliente actualizado o null si no existe.
     */
    async execute(id, clienteData) {
        return await this.clienteRepository.update(id, clienteData);
    }
}

module.exports = UpdateCliente;
