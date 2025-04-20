const mongoose = require("mongoose"); // importando el componente mogoose
const motoSchema = mongoose.Schema({
    marca: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },

    cilindrada: {
        type: Number,
        required: true,
    },

    precio: {
        type: Number,
        required: true
    },

    fecha: {
        type: Date,
        required: true,
    }
});
module.exports = mongoose.model("Moto", motoSchema);