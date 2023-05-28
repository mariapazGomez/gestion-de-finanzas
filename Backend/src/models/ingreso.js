const {Schema, model} = require('mongoose');
const mongoose = require("mongoose");

const ingresoSchema = new Schema({
    monto:{
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true},
    etiqueta: {
        type: String,
        required: true},
    descripcion: {
        type: String,
        required: true
    }
},{collection:'Ingresos'});

module.exports = mongoose.model('Ingreso', ingresoSchema);