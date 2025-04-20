const express = require("express");

const router = express.Router(); //manejador de rutas de express
const motoSchema = require("../models/motoModel");


//Nuevo MOTO
router.post("/motos", (req, res) => {
    const moto = motoSchema(req.body);
    moto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;
