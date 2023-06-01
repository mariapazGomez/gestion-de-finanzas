const express = require('express');
const path = require('path');

const app = express();
require('dotenv').config();
// base de datos
require('../src/bd');

// midlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Rutas
app.use('/api/home',require('./routes/index'));
app.use('/api/statistics',require('./routes/statistics'));

app.use(express.static(path.join(__dirname,'public')));


module.exports = app;
