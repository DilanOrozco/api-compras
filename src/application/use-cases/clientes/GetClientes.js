/**
 * Caso de uso para obtener todos los clientes.
 */
class GetClientes {
    /**
     * Inicializa el caso de uso con un repositorio de clientes.
     * @param {Object} clienteRepository - Repositorio que maneja la persistencia de clientes.
     * @param {Function} clienteRepository.findAll - Método para obtener todos los clientes de la base de datos.
     */
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    /**
     * Ejecuta la búsqueda de todos los clientes.
     * @returns {Promise<Array<Object>>} Lista de clientes almacenados en la base de datos.
     */
    async execute() {
        return await this.clienteRepository.findAll();
    }
}

module.exports = GetClientes;
