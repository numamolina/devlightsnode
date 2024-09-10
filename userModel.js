const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
     name: {
        type: String
     },   
     email: {
        type: String
     },
     contrasenia: {
        type: String
     },
     edad: {
        type: Number
     }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelUser = mongoose.model("usuarios", userSchema);
module.exports = ModelUser;