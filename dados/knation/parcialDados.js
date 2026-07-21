const conexao = require('../conexao');

class parcialDados {

    constructor() {};

    async excluir(idTreino) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpParcial_DoTreinoExcluir(" + idTreino + ");";

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

    async gravar(idTreino, idEstilo, distancia, segundosGastos, repeticoes) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpParcial_Gravar(" + idTreino + "," + idEstilo + "," + distancia + "," + segundosGastos + "," + repeticoes + ");";

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

    async parciaisDoTreino(idTreino) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpParcial_DoTreino (" + idTreino + ");";

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

module.exports = parcialDados;