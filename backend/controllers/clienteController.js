const path = require("path");
const Cliente = require("../models/Cliente.js");

exports.getCadastroCliente = async (req, res) => {
    res.sendFile(path.join(__dirname,"../../frontend/public/html/clientes/cadastro-cliente.html"));
};

exports.getListaClientes = async (req, res) => {
    res.sendFile(path.join(__dirname,"../../frontend/public/html/clientes/lista-clientes.html"));
};

exports.getEditarCliente = async (req, res) => {
    res.sendFile(path.join(__dirname,"../../frontend/public/html/clientes/editar-cliente.html"));
};

exports.getClienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findById(id);
        if (!cliente) {
            return res.status(404).json({ message: "Cliente não encontrado." });
        }
        return res.status(200).json(cliente);
    } catch (e) {
        return res.status(500).json({ message: "Erro ao buscar cliente.", error: e });
    }
};

exports.getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        return res.status(200).json(clientes);
    } catch(e) {
        return res.status(500).json({ message: "Erro ao buscar clientes.", error: e });
    }
};

exports.createCliente = async (req, res) => {
    try {
        const cliente = req.body;
        const newCliente = await Cliente.create(cliente);
        return res.status(201).json(newCliente);
    } catch (e) {
        if (e.code === 11000) {
            return res.status(400).json({ message: "Erro: e-mail, CPF ou telefone já existentes." });
        }
        return res.status(500).json({ message: "Erro ao cadastrar cliente.", error: e });
    }
};

exports.updateCliente = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const updatedCliente = await Cliente.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });
        if (!updatedCliente) {
            return res.status(404).json({ message: "Cliente não encontrado." });
        }
        return res.status(200).json(updatedCliente);
    } catch (e) {
        if (e.code === 11000) {
            return res.status(400).json({ message: "Erro: e-mail, CPF ou telefone já existentes." });
        }
        return res.status(400).json({ message: "Erro ao atualizar o cliente.", error: e });
    }
};

exports.deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCliente = await Cliente.findByIdAndDelete(id);
        if (!deletedCliente) {
            return res.status(404).json({ message: "Cliente não encontrado." });
        }
        return res.status(200).json({ message: "Cliente deletado com sucesso." });
    } catch (e) {
        return res.status(500).json({ message: "Erro ao deletar cliente.", error: e });
    }
};
