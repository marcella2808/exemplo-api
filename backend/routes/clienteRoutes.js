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
} = require("../controllers/clienteController");

const router = express.Router();

router.get("/cadastro", getCadastroCliente);
router.get("/lista", getListaClientes);
router.get("/editar/:id", getEditarCliente);

router.get("/get", getClientes);
router.get("/get/:id", getClienteById);
router.post("/post", createCliente);
router.put("/update/:id", updateCliente);
router.delete("/delete/:id", deleteCliente);

module.exports = router;
