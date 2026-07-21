const conexao = require('../conexao');

class estiloDados {

    constructor() {};

    async lista() {
        let conn;

        try {
            let sql = "Call SpEstilo_Todos(1);";

            conn = await conexao.getConnection();

            const rows = await conn.query(
                sql
            );
            
            return rows[0];
        } catch (e) {
            throw e;
        }        
        finally {
            if (conn) await conn.release();
        }
    }


}

module.exports = estiloDados;