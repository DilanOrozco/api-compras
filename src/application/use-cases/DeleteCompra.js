/**
 * Caso de uso para eliminar una compra.
 * 
 * Esta clase implementa la lógica de aplicación para eliminar una compra
 * utilizando un repositorio de compras que se inyecta como dependencia.
 */
class DeleteCompra {
    /**
     * Crea una instancia del caso de uso DeleteCompra.
     * 
     * @param {Object} comprasRepository - Repositorio que maneja la persistencia de compras.
     * @param {Function} comprasRepository.delete - Método para eliminar una compra en la base de datos.
     */
    constructor(comprasRepository) {
        this.comprasRepository = comprasRepository;
    }

    /**
     * Ejecuta la eliminación de una compra.
     * 
     * @async
     * @param {string} id - Identificador único de la compra a eliminar.
     * @returns {Promise<Object|null>} - Promesa que resuelve con la compra eliminada o `null` si no existe.
     */
    async execute(id) {
        return this.comprasRepository.delete(id);
    }
}

module.exports = DeleteCompra;
