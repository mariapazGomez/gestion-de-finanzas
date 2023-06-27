const express = require('express');
const app = express();
require('dotenv').config();
// base de datos
require('../src/bd');

// midlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Rutas
app.use('/api/home',require('./routes/index'));
app.use('/api/home',require('./routes/index'));
app.use('/api/statistics',require('./routes/statistics'));
app.use('/api/menu',require('./routes/menu'));
module.exports = app;
