const express = require('express');
const bolaoRoutes = require('./routes/bolaoRoutes');

const app = express();

// Permite receber JSON
app.use(express.json());

// Rotas
app.use('/bolao', bolaoRoutes);

module.exports = app;