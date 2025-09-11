/**
 * Caso de uso para obtener una compra por su identificador.
 * 
 * Esta clase implementa la lógica de aplicación para consultar una compra
 * específica utilizando un repositorio de compras que se inyecta como dependencia.
 */
class GetCompraById {
    /**
     * Crea una instancia del caso de uso GetCompraById.
     * 
     * @param {Object} comprasRepository - Repositorio que maneja la persistencia de compras.
     * @param {Function} comprasRepository.findById - Método para buscar una compra en la base de datos por su ID.
     */
    constructor(comprasRepository) {
        this.comprasRepository = comprasRepository;
    }

    /**
     * Ejecuta la búsqueda de una compra por su ID.
     * 
     * @async
     * @param {string} id - Identificador único de la compra.
     * @returns {Promise<Object|null>} - Promesa que resuelve con la compra encontrada o `null` si no existe.
     */
    async execute(id) {
        return await this.comprasRepository.findById(id);
    }
}

module.exports = GetCompraById;
