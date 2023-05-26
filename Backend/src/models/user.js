const {Schema, model} = require('mongoose');
const mongoose = require("mongoose");

const userSchema = new Schema({
    _id:{type: String,
        required: true},
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{collection: 'Usuarios'});

module.exports = mongoose.model('User', userSchema);

