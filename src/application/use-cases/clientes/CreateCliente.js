/**
 * Caso de uso para crear un cliente.
 */
class CreateCliente {
    /**
     * Inicializa el caso de uso con un repositorio de clientes.
     * @param {Object} clienteRepository - Repositorio que maneja la persistencia de clientes.
     * @param {Function} clienteRepository.create - Método para crear un cliente en la base de datos.
     */
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    /**
     * Ejecuta la creación de un cliente.
     * @param {Object} clienteData - Datos del cliente a crear.
     * @param {string} clienteData.documento - Documento único del cliente.
     * @param {string} clienteData.nombre - Nombre del cliente.
     * @param {string} clienteData.email - Correo electrónico único del cliente.
     * @param {string} clienteData.whatsapp - Número de WhatsApp del cliente.
     * @returns {Promise<Object>} Cliente creado.
     */
    async execute(clienteData) {
        return await this.clienteRepository.create(clienteData);
    }
}

module.exports = CreateCliente;
