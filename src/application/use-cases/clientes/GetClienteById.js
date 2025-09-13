/**
 * Caso de uso para obtener un cliente por su ID.
 */
class GetClienteById {
    /**
     * Inicializa el caso de uso con un repositorio de clientes.
     * @param {Object} clienteRepository - Repositorio que maneja la persistencia de clientes.
     * @param {Function} clienteRepository.findById - Método para buscar un cliente por ID en la base de datos.
     */
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    /**
     * Ejecuta la búsqueda de un cliente por su ID.
     * @param {string} id - ID del cliente en MongoDB.
     * @returns {Promise<Object|null>} Cliente encontrado o null si no existe.
     */
    async execute(id) {
        return await this.clienteRepository.findById(id);
    }
}

module.exports = GetClienteById;
