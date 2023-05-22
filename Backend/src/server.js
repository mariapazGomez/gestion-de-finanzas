const express = require('express');
const app = express();

// Rutas de ejemplo
app.get('/', (req, res) => {
    res.send('Primer inicio de gestion de gastos personales !');
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});