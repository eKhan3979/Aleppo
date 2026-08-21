const conexao = require('../conexao');
const model = require('../../model/timeModel');

class timeDados {

    constructor() {};

    async gravar(idTime, nome, uf, cidade, ativo, abreviatura, tipo)
    {
        let conn;

        try {
            let ativo1 = ativo ? 1 : 0;
            let sql = "Call u258112148_1.SpBTimes_Gravar(" + idTime + ", '" + nome + "', '" + uf + "', '" + cidade + "', " + ativo1 + ", '" + abreviatura + "/" + tipo + "');";

            conn = await conexao.getConnection();

            const rows = await conn.query(sql);

            return rows[0];
        } catch (e) {
            throw e;
        } finally {
            if (conn) await conn.release();
        };
    }

    async lista() {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBTimes_Lista(1);";

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
    
    async timesCampeonatoDisponiveis(idCampeonato) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBCampeonatoTimes_Disponiveis(" + idCampeonato + ");";

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