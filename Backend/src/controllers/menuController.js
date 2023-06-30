const mongoose = require('mongoose');
const db = require('../bd.js');
const userSchema = require('../../src/models/user.js'); //no se me importa


exports.getData = (input, response) => {
  const Usuario = mongoose.model('User', userSchema);

  Usuario.findOne({ _id: input }, (err, usuario) => {
    if (err) {
      console.error('Error al extraer los datos del usuario:', err);
    } else {
      console.log(usuario);
      response.json(usuario); // Devuelve el resultado como respuesta JSON
    }
  });
};