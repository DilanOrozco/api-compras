const CreateCliente = require("../../../application/use-cases/clientes/CreateCliente");
const DeleteCliente = require("../../../application/use-cases/clientes/DeleteCliente");
const GetClienteById = require("../../../application/use-cases/clientes/GetClienteById");
const GetClientes = require("../../../application/use-cases/clientes/GetClientes");
const UpdateCliente = require("../../../application/use-cases/clientes/UpdateCliente");
const ClientesRepositoryMongo = require("../../repositories/ClientesRepositoryModel");

const clientesRepository = new ClientesRepositoryMongo();

/**
 * Controlador para crear un cliente.
 * @param {import("express").Request} req - Objeto de petición HTTP.
 * @param {import("express").Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>}
 */
const createCliente = async (req, res) => {
    try {
        const createClienteUC = new CreateCliente(clientesRepository);
        const cliente = await createClienteUC.execute(req.body);
        res.status(201).json(cliente);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * Controlador para obtener todos los clientes.
 * @param {import("express").Request} req - Objeto de petición HTTP.
 * @param {import("express").Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>}
 */
const getClientes = async (req, res) => {
    try {
        const getClientesUC = new GetClientes(clientesRepository);
        const clientes = await getClientesUC.execute();
        res.json(clientes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * Controlador para obtener un cliente por su ID.
 * @param {import("express").Request} req - Objeto de petición HTTP.
 * @param {import("express").Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>}
 */
const getClienteById = async (req, res) => {
    try {
        const getClienteByIdUC = new GetClienteById(clientesRepository);
        const cliente = await getClienteByIdUC.execute(req.params.id);
        if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });
        res.json(cliente);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * Controlador para actualizar un cliente por su ID.
 * @param {import("express").Request} req - Objeto de petición HTTP.
 * @param {import("express").Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>}
 */
const updateCliente = async (req, res) => {
    try {
        const updateClienteUC = new UpdateCliente(clientesRepository);
        const cliente = await updateClienteUC.execute(req.params.id, req.body);
        if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });
        res.json(cliente);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * Controlador para eliminar un cliente por su ID.
 * @param {import("express").Request} req - Objeto de petición HTTP.
 * @param {import("express").Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>}
 */
const deleteCliente = async (req, res) => {
    try {
        const deleteClienteUC = new DeleteCliente(clientesRepository);
        const cliente = await deleteClienteUC.execute(req.params.id);
        if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });
        res.json({ message: "Cliente eliminado con éxito" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createCliente,
    getClientes,
    getClienteById,
    updateCliente,
    deleteCliente
};
