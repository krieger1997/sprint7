// const express = require('express');
// const cors = require('cors');
// const rutas = require('./routes/routes');
import rutas from './routes/routes.js';
import express  from 'express';


const app = express();
const puerto = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use('/', rutas);

app.listen(puerto, () => {
  console.log(`Servidor arriba en puerto ${puerto}`);
});