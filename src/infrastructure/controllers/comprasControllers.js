const CompraRepositoyModel = require('../repositories/CompraRepositoryModel')
const GetCompras = require('../../application/use-cases/GetCompras')
const CreateCompra = require('../../application/use-cases/CreateCompra')
const GetCompraById = require('../../application/use-cases/GetCompraById')
const DeleteCompra = require('../../application/use-cases/DeleteCompra')
const UpdateCompra = require('../../application/use-cases/UpdateCompra')

const comprasRepository = new CompraRepositoyModel();

/**
 * Obtiene todas las compras.
 * 
 * @async
 * @function getCompras
 * @param {import('express').Request} req - Objeto de solicitud HTTP.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<import('express').Response>} Respuesta con la lista de compras.
 */
const getCompras = async (req, res) => {
    try {
        const getComprasUC = new GetCompras(comprasRepository);
        const compras = await getComprasUC.execute();
        return res.status(200).json(compras);
    } catch (err) {
        return res.status(500).json({ Error: err.message });
    }
};

/**
 * Crea una nueva compra.
 * 
 * @async
 * @function createCompra
 * @param {import('express').Request} req - Objeto de solicitud HTTP con los datos de la compra en el cuerpo.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<import('express').Response>} Respuesta con la compra creada.
 */
const createCompra = async (req, res) => {
    try {
        const CreateCompraUC = new CreateCompra(comprasRepository);
        const compra = await CreateCompraUC.execute(req.body);
        return res.status(201).json(compra);
    } catch (err) {
        return res.status(500).json({ Error: err.message });
    }
};

/**
 * Obtiene una compra por su ID.
 * 
 * @async
 * @function getCompraById
 * @param {import('express').Request} req - Objeto de solicitud HTTP con el ID en los parámetros.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<import('express').Response>} Respuesta con la compra encontrada o error si no existe.
 */
const getCompraById = async (req, res) => {
    try {
        const getCompraByIdUC = new GetCompraById(comprasRepository);
        const compra = await getCompraByIdUC.execute(req.params.id);

        if (!compra) return res.status(404).json({ Error: 'Compra no encontrada' });

        return res.status(200).json(compra);
    } catch (err) {
        return res.status(500).json({ Error: err.message });
    }
};

/**
 * Actualiza una compra existente.
 * 
 * @async
 * @function updateCompra
 * @param {import('express').Request} req - Objeto de solicitud HTTP con el ID en los parámetros y los nuevos datos en el cuerpo.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<import('express').Response>} Respuesta con la compra actualizada o error si no existe.
 */
const updateCompra = async (req, res) => {
    try {
        const { id } = req.params;
        const updateCompraUC = new UpdateCompra(comprasRepository);
        const compra = await updateCompraUC.execute(id, req.body);

        if (!compra) {
            return res.status(404).json({ Error: "Compra no encontrada" });
        }

        return res.status(200).json(compra);
    } catch (err) {
        return res.status(500).json({ Error: err.message });
    }
};

/**
 * Elimina una compra por su ID.
 * 
 * @async
 * @function deleteCompra
 * @param {import('express').Request} req - Objeto de solicitud HTTP con el ID en los parámetros.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<import('express').Response>} Respuesta con la compra eliminada o error si no existe.
 */
const deleteCompra = async (req, res) => {
    try {
        const deleteCompraUC = new DeleteCompra(comprasRepository);
        const eliminada = await deleteCompraUC.execute(req.params.id);

        if (!eliminada) return res.status(404).json({ Error: 'Compra no encontrada' });

        return res.json(eliminada);
    } catch (err) {
        return res.status(500).json({ Error: err.message });
    }
};

module.exports = { getCompras, createCompra, getCompraById, deleteCompra, updateCompra };
