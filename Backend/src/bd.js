const mongoose = require('mongoose');
const app = require('../src/app');

mongoose.connect('mongodb+srv://root:SiHrBrnpp7YepAv9@gdg01tel335.tc2whtw.mongodb.net/', {
    dbName: 'GDGData',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //////////////////////////////////////

});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
    console.log('Conexión exitosa a la base de datos');
    // Iniciar el servidor
    app.listen(3000, () => {
        console.log('Servidor iniciado en el puerto 3000');
    });
});
