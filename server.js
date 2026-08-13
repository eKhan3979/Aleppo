/*
import express from 'express';

const app = express();

const JWT_SECRET = process.env.JWT_SECRET;

function authenticate(req, res, next) {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token || token != JWT_SECRET) {
        return res.status(401).json({
            error: "Token inválido ou ausente"            
        });
    }

    next();
}

app.get('/api/hello', authenticate, (req, res) => {
    res.json({
        message: "API funcionando !"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});
*/

const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});