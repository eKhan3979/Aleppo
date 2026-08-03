const conexao = require('../conexao');

class jogoDados {

    constructor() {};

    async jogoResultado(idCampeonatoJogo, golsTimeCasa, golsTimeVisitante, finalizado) {
        let conn;
        let retorno = 0;

        try
        {
            let sql = "Call u258112148_1.SpBJogo_Resultado(" + idCampeonatoJogo + "," + golsTimeCasa + "," + golsTimeVisitante + "," + finalizado + ");";

            conn = await conexao.getConnection();

            const rows = await conn.query(
                sql
            );

            retorno = 1;
        } catch (e) {
            throw e;
        } finally {
            if (conn) await conn.release();
        }

        return retorno;
    }

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