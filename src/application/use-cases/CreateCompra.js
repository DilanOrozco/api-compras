/**
 * Caso de uso para crear una compra.
 * 
 * Esta clase implementa la lógica de aplicación para crear una nueva compra
 * utilizando un repositorio de compras que se inyecta como dependencia.
 */
class CreateCompra {
    /**
     * Crea una instancia del caso de uso CreateCompra.
     * 
     * @param {Object} comprasRepository - Repositorio que maneja la persistencia de compras.
     * @param {Function} comprasRepository.create - Método para crear una compra en la base de datos.
     */
    constructor(comprasRepository) {
        this.comprasRepository = comprasRepository;
    }

    /**
     * Ejecuta la creación de una compra.
     * 
     * @async
     * @param {Object} data - Datos de la compra a crear.
     * @returns {Promise<Object>} - Promesa que resuelve con la compra creada.
     */
    async execute(data) {
        return this.comprasRepository.create(data);
    }
}

module.exports = CreateCompra;
