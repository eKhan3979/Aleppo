import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import mariadb from 'mariadb';
import jwt from 'jsonwebtoken';

import bolaoRoutes from './routes/bolaoRoutes.js';
import knationRoutes from './routes/knationRoutes.js';

import { JogadorLoginDto } from './model/jogadorLoginDto.js';

const app = express();

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number("3306"),
    connectTimeout: Number("30000")
});

const allowOrigins = [
    'https://olive-sparrow-185968.hostingersite.com',
    'http://localhost:3000',
    'http://localhost',
    'https://localhost'
];

app.use(cors({
    origin: allowOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']    
}));

app.use(express.json());

app.use("/bolao", bolaoRoutes);
app.use("/knation", knationRoutes);

app.post('/bolao/login', async (req, res) => {
    const { email, senha } = req.body;
    
    if (!email || !senha) {
        return res.status(400).json({
            success: false,
            message: 'E-mail e senha são obrigatórios'
        });
    } else {
        (async () => {
            try {
                let conn;
                let sql = "Call u258112148_1.SpBLogin('" + email + "','" + senha + "');";

                conn = await pool.getConnection();

                const rows = await conn.query(
                    sql
                );

                if (rows[0][0] != undefined) {
                    let jogadorLogin = new JogadorLoginDto();

                    jogadorLogin.IdJogador = rows[0][0].IdJogador;
                    jogadorLogin.IdEmpresa = rows[0][0].IdEmpresa;
                    jogadorLogin.NomeApelido = rows[0][0].NomeApelido;
                    jogadorLogin.email = rows[0][0].email;
                    jogadorLogin.Ativo = rows[0][0].Ativo;

                    conn.destroy();
                    /*
                    const token = jwt.sign(
                                    { IdJogador: jogadorLogin.IdJogador },
                                      process.env.JWT_SECRET,
                                    { expiresIn: '1h' }
                                );

                    jogadorLogin.Token = token;
                    */

                    res.status(200).json(jogadorLogin);
                } else {
                    return res.status(401).json({
                        success: false,
                        message: 'E-mail/senha não cadastrado !'
                    });
                }
            } catch (erro) {
                res.status(500).json({
                    erro: erro.message
                });
            }
        })();
    }
});

app.listen(3000, () => {
    console.log("API rodando no http://localhost:3000");
});