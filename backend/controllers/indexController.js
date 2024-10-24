const path = require('path')

exports.getIndex = async (req, res) => {
    res.sendFile(path.join(__dirname, "../..", "frontend", "public", "html", "index.html")); // Envie o arquivo index.html
};