/**
 * Caso de uso para eliminar un cliente.
 */
class DeleteCliente {
    /**
     * Inicializa el caso de uso con un repositorio de clientes.
     * @param {Object} clienteRepository - Repositorio que maneja la persistencia de clientes.
     * @param {Function} clienteRepository.delete - Método para eliminar un cliente en la base de datos.
     */
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    /**
     * Ejecuta la eliminación de un cliente por su ID.
     * @param {string} id - ID del cliente a eliminar.
     * @returns {Promise<Object|null>} Cliente eliminado o null si no existe.
     */
    async execute(id) {
        return await this.clienteRepository.delete(id);
    }
}

module.exports = DeleteCliente;
