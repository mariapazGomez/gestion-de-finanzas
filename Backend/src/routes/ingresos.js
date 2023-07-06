const express = require('express');
const router = express.Router();
const Ingreso = require('../models/ingreso');

router.get('/:id_usuario', async (req, res) => {
    const id_usuario = req.params.id_usuario; 
    try {
        const ingreso = await Ingreso.find({ id_usuario: id_usuario });
        res.json(ingreso);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
