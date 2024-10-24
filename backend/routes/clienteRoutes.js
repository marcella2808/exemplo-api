const express = require("express");
const {
    getCadastroCliente,
    getListaClientes,
    getClientes,
    createCliente,
} = require("../controllers/clienteController"); 

const router = express.Router();

router.get("/cadastro", getCadastroCliente); 
router.get("/lista", getListaClientes); 
router.get("/get", getClientes); 
router.post("/post", createCliente); 

module.exports = router;
