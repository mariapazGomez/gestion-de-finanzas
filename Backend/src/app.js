const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
// base de datos
require('../src/bd');

// Configurar opciones de CORS
const corsOptions = {
    origin: 'http://localhost:3001', // Reemplaza con el origen de tu aplicación de React
    optionsSuccessStatus: 200 // Opcionalmente, puedes especificar un código de estado de éxito personalizado
  };
// Habilitar CORS para todas las rutas
app.use(cors(corsOptions));
// midlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Rutas
app.use('/api/home',require('./routes/index'));
app.use('/api/home',require('./routes/index'));
app.use('/api/menu',require('./routes/menu'));
app.use('/api/egresos', require('./routes/egresos'));
app.use('/api/ingresos', require('./routes/ingresos'));

module.exports = app;
