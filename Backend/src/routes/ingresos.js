const express = require('express');
const router = express.Router();
const Ingreso = require('../models/ingreso');

router.get('/:id_usuario', async (req, res) => {
    const id_usuario = req.params.id_usuario; 
    try {
        const ingresos = await Ingreso.find({ id_usuario: id_usuario });
        const totalIngresos = ingresos.reduce((acc, ingreso) => acc + ingreso.monto, 0);
        res.json({ ingresos, totalIngresos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
