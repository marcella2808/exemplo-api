const path = require("path");

// Envia a página inicial
exports.getIndex = async (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/public/html/index.html"));
};
