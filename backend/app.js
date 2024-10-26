require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const clienteRoutes = require("./routes/clienteRoutes");
const indexRoutes = require("./routes/indexRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static("../frontend/public"));

// Rotas
app.use("/", indexRoutes);
app.use("/clientes", clienteRoutes);

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na URL: http://localhost:${PORT}`);
});
