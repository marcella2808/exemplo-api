const path = require("path"); 
const Cliente = require("../models/Cliente.js");

exports.getCadastroCliente = async (req, res) => {
    res.sendFile(path.join(__dirname, "../..", "frontend", "public", "html", "cadastro-cliente.html")); // Envie o arquivo index.html
};

exports.getListaClientes = async (req, res) => {
    res.sendFile(path.join(__dirname, "../..", "frontend", "public", "html", "lista-clientes.html"))
}

exports.getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        return res.status(200).json(clientes);
    } catch {
        return res.status(404);
    }
};

exports.createCliente = async (req, res) => {
    const cliente = req.body;
    const newCliente = await Cliente.create(cliente);
    return res.status(201).json(newCliente);
};
