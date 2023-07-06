const express = require('express');
const router = express.Router();
const Egreso = require('../models/egreso');

router.get('/:id_usuario', async (req, res) => {
    const id_usuario = req.params.id_usuario; 
    try {
        const egresos = await Egreso.find({ id_usuario: id_usuario });
        const totalEgresos = egresos.reduce((acc, egreso) => acc + egreso.monto, 0);
        res.json({ egresos, totalEgresos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
