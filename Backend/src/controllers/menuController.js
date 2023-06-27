const mongoose = require('mongoose');
const db = require('C:/Users/marce/OneDrive/Escritorio/proyecto-apps/gestion-de-finanzas/Backend/src/bd.js');
const userSchema = require('C:/Users/marce/OneDrive/Escritorio/proyecto-apps/gestion-de-finanzas/Backend/src/models/user.model.js'); //no se me importa


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