const conexao = require('../conexao');
const model = require('../../model/timeModel');

class timeDados {

    constructor() {};

    async timesDoCampeonato(idCampeonato) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBCampeonatoTimes(" + idCampeonato + ");";

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

module.exports = timeDados;