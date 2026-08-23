import mariadb from 'mariadb';

const conexao = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: "0W*_3%#k7",
    database: process.env.DB_DATABASE,
    port: Number("3306"),
    connectTimeout: Number("30000")
});

export default conexao;