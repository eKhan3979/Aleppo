const conexao = require('../conexao');
const model = require('../../model/campeonatoModel');

class campeonatoDados {

    constructor() {};

    async campeonatosDaEmpresa(idEmpresa) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBCampeonatosEmpresa_Ativos(" + idEmpresa + ");";

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

    async campeonatoRodadas(idCampeonato) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBCampeonato_Rodadas(" + idCampeonato + ");";

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

    async lista() {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBCampeonatos_Lista(1);";

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

module.exports = campeonatoDados;