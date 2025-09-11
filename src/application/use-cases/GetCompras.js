/**
 * Caso de uso para obtener todas las compras.
 * 
 * Esta clase implementa la lógica de aplicación para consultar
 * todas las compras utilizando un repositorio de compras que se 
 * inyecta como dependencia.
 */
class GetCompras {
    /**
     * Crea una instancia del caso de uso GetCompras.
     * 
     * @param {Object} comprasRepository - Repositorio que maneja la persistencia de compras.
     * @param {Function} comprasRepository.findAll - Método para obtener todas las compras de la base de datos.
     */
    constructor(comprasRepository) {
        this.comprasRepository = comprasRepository;
    }

    /**
     * Ejecuta la búsqueda de todas las compras.
     * 
     * @async
     * @returns {Promise<Object[]>} - Promesa que resuelve con un arreglo de compras.
     */
    async execute() {
        return await this.comprasRepository.findAll();
    }
}

module.exports = GetCompras;
