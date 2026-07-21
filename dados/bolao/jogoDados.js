const conexao = require('../conexao');

class jogoDados {

    constructor() {};

    async jogosDaRodada(idCampeonato, rodada) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBCampeonato_JogosDaRodada(" + idCampeonato + "," + rodada + ");";

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

    async rodadaAtual(idCampeonato) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBCampeonato_RodadaEmAndamento(" + idCampeonato + ");";

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

module.exports = jogoDados;