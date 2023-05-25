const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingresoSchema = new Schema({
    _id:{required: true},
    user_id:{required:true},
    monto:{type: String, required: true},
    fehca: {type: Date, required: true},
    etiqueta: {type: String, required: true},
    descripcion: {type: String, required: true}
});

const userSchema = new Schema({
    _id:{required: true},
    name: {type: String, required: true},
    username:{type: String, required: true},
    ingresos: {type: ingresoSchema},

});

