const express = require('express');
const cors = require('cors');

const bolaoRoutes = require('./routes/bolaoRoutes');
const knationRoutes = require('./routes/knationRoutes');

//const autenticar = require('./middleware/auth');

const app = express();

app.use(cors());
// Permite receber JSON
app.use(express.json());

// Rotas
app.use('/bolao', bolaoRoutes);
app.use('/knation', knationRoutes);
//app.use('/bolao', autenticar, bolaoRoutes);
//app.use('/knation', autenticar, knationRoutes);

module.exports = app;