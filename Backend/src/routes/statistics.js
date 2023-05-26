const express = require('express');
const router = express.Router();
const Ingreso = require('../models/ingreso');
const Egreso = require('../models/egreso');
router.get('/', async (req,res)=>{
    const ingresos = await Ingreso.find();
    const egresos = await  Egreso.find();
    res.json({ingresos ,egresos});
});

router.post('/', async (req,res)=>{
    const {monto, fecha, etiqueta, descripcion} = req.body;
    const ingreso = new Ingreso({monto, fecha, etiqueta, descripcion});
    await ingreso.save();
    res.json({status: "Ingreso agregado !"});

})

module.exports = router;