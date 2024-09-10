const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/usuarios_prueba");
        console.log("Conexión correcta");
    } catch (err) {
        console.log("Error de conexión: ", err);
    }
};

module.exports = dbconnect;