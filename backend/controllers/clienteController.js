const path = require("path");
const Cliente = require("../models/Cliente.js");

// Envia a página de cadastro de cliente
exports.getCadastroCliente = async (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/public/html/clientes/cadastro-cliente.html"));
};

// Envia a página da lista de clientes
exports.getListaClientes = async (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/public/html/clientes/lista-clientes.html"));
};

// Envia a página de edição de cliente
exports.getEditarCliente = async (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/public/html/clientes/editar-cliente.html"));
};

// Busca um cliente pelo ID
exports.getClienteById = async (req, res) => {
    const { id } = req.params; // Extrai o ID do cliente dos parâmetros da URL
    try {
        const cliente = await Cliente.findById(id); // Procura o cliente pelo ID 
        if (!cliente) {
            return res.status(404).json({ message: "Cliente não encontrado." });
        }
        return res.status(200).json(cliente); // Retorna os dados em formato JSON
    } catch (e) {
        return res.status(500).json({ message: "Erro ao buscar cliente.", error: e });
    }
};

// Busca todos os clientes
exports.getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find(); // Procura todos os clientes
        return res.status(200).json(clientes);
    } catch (e) {
        return res.status(500).json({ message: "Erro ao buscar clientes.", error: e });
    }
};

// Cadastra um novo cliente
exports.createCliente = async (req, res) => {
    try {
        const cliente = req.body; // Pega os dados recebidos pela requisição POST
        const newCliente = await Cliente.create(cliente); // Cria o cliente com base nos dados recebidos
        return res.status(201).json(newCliente);
    } catch (e) {
        if (e.code === 11000) { // Caso o Mongo retorne duplicate key error
            return res.status(400).json({ message: "Erro: e-mail, CPF ou telefone já existentes." });
        }
        return res.status(500).json({ message: "Erro ao cadastrar cliente.", error: e });
    }
};

// Atualiza um cliente pelo ID
exports.updateCliente = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        // Busca e atualiza o cliente
        const updatedCliente = await Cliente.findByIdAndUpdate(id, data, {
            new: true, // Retorna o cliente atualizado
            runValidators: true, // Realiza as validações definidas no Model
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

// Deleta um cliente pelo ID
exports.deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {
        // Busca e deleta o cliente
        const deletedCliente = await Cliente.findByIdAndDelete(id); 
        if (!deletedCliente) {
            return res.status(404).json({ message: "Cliente não encontrado." });
        }
        return res.status(200).json({ message: "Cliente deletado com sucesso." });
    } catch (e) {
        return res.status(500).json({ message: "Erro ao deletar cliente.", error: e });
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
