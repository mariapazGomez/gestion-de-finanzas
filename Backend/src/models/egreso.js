const {Schema, model} = require('mongoose');
const mongoose = require("mongoose");

const egresoSchema = new Schema({
    _id:{
        type:String,
        autocomplete: true
    },
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
    },
    tipo_de_pago:{
        type:String,
        required: true
    }
},{collection:'Egresos'});

module.exports = mongoose.model('Egreso', egresoSchema);