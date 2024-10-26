require("dotenv").config(); // Carrega as variáveis de ambiente
const mongoose = require("mongoose"); // Importa o módulo mongoose para conectar ao MongoDB
const DB_URI = process.env.DB_URI; // URI do banco de dados

// Função que estabelece a conexão com o banco de dados
const connectDB = async () => {
    await mongoose
        .connect(DB_URI)
        .then(() => console.log("Conectado com sucesso")) 
        .catch((e) => "Erro ao conectar: " + e); 
};

// Exporta a função de conexão
module.exports = connectDB;
