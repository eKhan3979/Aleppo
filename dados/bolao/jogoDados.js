const conexao = require('../conexao');

class jogoDados {

    constructor() {};

    async jogoInsert(idCampeonato, rodada, rodadaNome, yyyy_Mm_Dd, hh_Mm, idTimeCasa, idTimeVisitante) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBJogo_Insert(" + idCampeonato + "," + rodada + ",'" + rodadaNome + "','" + yyyy_Mm_Dd + "','" + hh_Mm + "'," +  idTimeCasa + "," + idTimeVisitante + ");";

            conn = await conexao.getConnection();

            const rows = await conn.query(
                sql
            );

            return rows[0];
        } catch (e) {

        } finally {
            if (conn) await conn.release();
        }
    }

    async jogoResultado(id, golsCasa, golsVisitante, fim) {
        let conn;
        let retorno = 0;

        try
        {
            let sql = "Call u258112148_1.SpBJogo_Resultado(" + id + "," + golsCasa + "," + golsVisitante + "," + fim + ");";

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
            
            return rows;
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

            return 1;
        } catch (e) {
            throw e;
        }        
        finally {
            if (conn) await conn.release();
        }
    }
}

module.exports = jogoDados;