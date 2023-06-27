//kuki
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/:_id', async (req, res) => {
  const _id = req.params._id; 
  try {
    const user = await User.findOne({ _id });
    if(user){
      console.log(user);
      res.json(user); // Devuelve el resultado como respuesta JSON
    }else{
      res.status(404).send({ message: 'Usuario no encontrado' });
    }
  } catch (err) {
    console.error('Error al extraer los datos del usuario:', err);
    res.status(500).json({ error: 'Error al extraer los datos del usuario' });
  }
});

module.exports = router;
