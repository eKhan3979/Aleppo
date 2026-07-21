const express = require('express');
const bolaoRoutes = require('./routes/bolaoRoutes');
const knationRoutes = require('./routes/knationRoutes');

const app = express();

// Permite receber JSON
app.use(express.json());

// Rotas
app.use('/bolao', bolaoRoutes);
app.use('/knation', knationRoutes);

module.exports = app;