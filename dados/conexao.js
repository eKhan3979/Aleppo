import mariadb from 'mariadb';

const conexao = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number("3306"),
    connectTimeout: Number("30000")
});

export default conexao;