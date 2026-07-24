const conexao = require('../conexao');

class pontuacaoDados {

    constructor() {};

    async lista() {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBPontuacao_Lista();";

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

    async rankingRodada(idEmpresa, idCampeonato, rodada) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBAposta_PontosRodada(" + idEmpresa + "," + idCampeonato + "," + rodada + ");";

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

module.exports = pontuacaoDados;