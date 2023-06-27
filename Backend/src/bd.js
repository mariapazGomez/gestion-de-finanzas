const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;
// Base de datos
mongoose.connect('mongodb+srv://root:SiHrBrnpp7YepAv9@gdg01tel335.tc2whtw.mongodb.net/GDGData', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
    console.log('Conexión exitosa a la base de datos');
});
module.exports = db;