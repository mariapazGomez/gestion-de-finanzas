const express = require('express');
const app = require('../src/app');
const port = 3000;
// Iniciar el servidor
app.listen(port, () => {
    console.log('Servidor iniciado en el puerto '+ port);
});