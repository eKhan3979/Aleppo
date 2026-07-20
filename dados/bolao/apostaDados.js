const conexao = require('../conexao');
const model = require('../../model/timeModel');

class apostaDados {

    constructor() {};

    async apostasDaRodada(idCampeonato, idJogador, rodada) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBCampeonato_ApostasRodada(" + idCampeonato + "," + idJogador + "," + rodada + ");";

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

    async gravar(idAposta, idCampeonatoJogo, idJogador, golsTimeCasa, golsTimeVisitante) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBAposta_Gravar(" + idAposta + "," + idCampeonatoJogo + "," + idJogador + "," + golsTimeCasa + "," + golsTimeVisitante + ",0,0,0,0);";

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

module.exports = apostaDados;