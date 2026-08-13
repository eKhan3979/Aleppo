const express = require('express');
const cors = require('cors');
const bolaoRoutes = require('./routes/bolaoRoutes');
const knationRoutes = require('./routes/knationRoutes');

const app = express();

app.use(cors());
// Permite receber JSON
app.use(express.json());

// Rotas
app.use('/bolao',  bolaoRoutes);
app.use('/knation', knationRoutes);

module.exports = app;