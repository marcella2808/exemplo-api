const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;

const testConnection = async () => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conexão com MongoDB bem-sucedida!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    } finally {
        mongoose.connection.close(); 
    }
};

testConnection();
