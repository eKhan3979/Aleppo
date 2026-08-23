import mariadb from 'mariadb';
//const mariadb = require('mariadb');

const conexao = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    connectTimeout: process.env.DB_CONNECTTIMEOUT
});

//module.exports = pool;
export default conexao;