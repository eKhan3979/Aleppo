const conexao = require('../conexao');

class ambienteDados {

    constructor() {};

    async lista() {
        let conn;

        try {
            let sql = "Call u258112148_1.SpAmbiente_Todos();";

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

module.exports = ambienteDados;