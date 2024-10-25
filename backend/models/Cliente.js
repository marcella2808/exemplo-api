const mongoose = require("mongoose");

const enderecoSchema = new mongoose.Schema({
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true, maxlength: 2, uppercase: true },
    cep: { type: String, required: true, minlength: 8, maxlength: 8 },
});

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    cpf: { type: String,required: true, unique: true, minlength: 11, maxlength: 11 },
    tel: { type: String, required: true, unique: true },
    endereco: { type: enderecoSchema, required: true },
    dataCriacao: { type: Date, default: Date.now(), immutable: true },
});

module.exports = mongoose.model("Cliente", clienteSchema);
