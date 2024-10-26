const express = require("express");
const {
    getCadastroCliente,
    getListaClientes,
    getEditarCliente,
    getClienteById,
    getClientes,
    createCliente,
    updateCliente,
    deleteCliente,
} = require("../controllers/clienteController"); // Importa as funções do controller

const router = express.Router();

// Rotas para servir as páginas HTML
router.get("/cadastro", getCadastroCliente);
router.get("/lista", getListaClientes);
router.get("/editar/:id", getEditarCliente);

// Rotas da API para as operações CRUD
router.get("/get", getClientes);
router.get("/get/:id", getClienteById);
router.post("/post", createCliente);
router.put("/update/:id", updateCliente);
router.delete("/delete/:id", deleteCliente);

module.exports = router; // Exporta o router para ser usado no app.js
