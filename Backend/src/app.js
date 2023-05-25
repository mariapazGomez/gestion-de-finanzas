const express = require('express');
const app = express();
require('../src/bd')
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Todo funcionando ...');
});

module.exports = app;
