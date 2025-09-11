/**
 * Caso de uso para actualizar una compra.
 * 
 * Esta clase implementa la lógica de aplicación para modificar una compra
 * existente utilizando un repositorio de compras que se inyecta como dependencia.
 */
class UpdateCompra {
    /**
     * Crea una instancia del caso de uso UpdateCompra.
     * 
     * @param {Object} comprasRepository - Repositorio que maneja la persistencia de compras.
     * @param {Function} comprasRepository.update - Método para actualizar una compra en la base de datos.
     */
    constructor(comprasRepository) {
        this.comprasRepository = comprasRepository;
    }

    /**
     * Ejecuta la actualización de una compra.
     * 
     * @async
     * @param {string} id - Identificador único de la compra a actualizar.
     * @param {Object} data - Datos actualizados de la compra.
     * @returns {Promise<Object|null>} - Promesa que resuelve con la compra actualizada o `null` si no existe.
     */
    async execute(id, data) {
        return await this.comprasRepository.update(id, data);
    }
}

module.exports = UpdateCompra;
