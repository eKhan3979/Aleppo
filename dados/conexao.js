const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '193.203.175.121',
    user: 'u258112148_Khan',
    password: '0W*_3%#k7',
    database: 'u258112148_1',
    port: '3306',
    connectTimeout: 5000  
});

module.exports = pool;