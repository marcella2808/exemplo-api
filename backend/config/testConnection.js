require("dotenv").config();
const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;

// Função de teste de conexão com o banco
const testConnection = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Conexão com MongoDB bem-sucedida!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    } finally {
        mongoose.connection.close();
    }
};

testConnection();
