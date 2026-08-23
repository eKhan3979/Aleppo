import mariadb from 'mariadb';

const conexao = mariadb.createPool({
    host: "193.203.175.121",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number("3306"),
    connectTimeout: Number("30000")
});

export default conexao;