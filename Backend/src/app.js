const express = require('express');
const cors = require('cors');
const app = express();
const User = require('./models/user.model')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Todo funcionando ...');
});

// Ruta para el registro de usuarios
app.post('/register', async (req, res) => {
    try {
      const { _id, name, email, password } = req.body;
  
      // Crear un nuevo usuario
      const newUser = new User({ _id, name, email, password });
  
      // Guardar el usuario en la base de datos
      await newUser.save();
  
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      res.status(500).json({ message: 'Error al registrar usuario' });
    }
  });
  
  // Ruta para el inicio de sesión de usuarios
  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Verificar si el usuario existe en la base de datos
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      // Verificar la contraseña del usuario
      if (user.password !== password) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }
  
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).json({ message: 'Error al iniciar sesión' });
    }
  });
  

module.exports = app;
