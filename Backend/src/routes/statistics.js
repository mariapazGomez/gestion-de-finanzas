const express = require('express');
const router = express.Router();
const Ingreso = require('../models/ingreso');
const Egreso = require('../models/egreso');
const User = require("../models/user");
router.get('/', async (req,res)=>{
    const ingresos = await Ingreso.find();
    const egresos = await  Egreso.find();
    res.json({ingresos ,egresos});
});


router.post('/', async (req,res)=>{
    const {id_usuario ,monto, fecha, etiqueta, descripcion} = req.body;
    const ingreso = new Ingreso({id_usuario, monto, fecha, etiqueta, descripcion});
    await ingreso.save();
    res.json({status: "Ingreso agregado !"});

})

router.put('/:_id', async (req,res)=>{
    const {monto, fecha, etiqueta, descripcion} = req.body;
    const newIngreso = { monto, fecha, etiqueta, descripcion};
    await Ingreso.findByIdAndUpdate(req.params._id, newIngreso);
    res.json({status: 'Ingreso actualizado'})
})

router.delete('/:id', async (req,res)=>{
    await Ingreso.findByIdAndRemove(req.params.id);
    res.json({status:'Ingreso eliminado'});
})

module.exports = router;