const conexao = require('../conexao');

class treinoDados {

    constructor() {};

    async delete(idTreino) {
        let conn;
        let retorno = false;

        try {
            let sql = "Call u258112148_1.SpTreino_Delete(" + idTreino + ");";

            conn = await conexao.getConnection();

            await conn.execute(sql);
            
            retorno = true;
        } catch (e) {
            throw e;
        }        
        finally {
            if (conn) await conn.release();
        }

        return retorno;
    }

    async estatisticaMensal(yyyy_mm_dd_de, yyyy_mm_dd_ate) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpKEstatisticaMensal('" + yyyy_mm_dd_de + "', '" + yyyy_mm_dd_ate + "');";

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

    async gravar(idTreino, yyyy_Mm_Dd, hh_Mm, total, segundosGastos, idAmbiente, tempAmbiente, tempAgua) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpKTreino_Gravar(" + idTreino + ",'" + yyyy_Mm_Dd + "','" + hh_Mm + "'," + total + "," + segundosGastos + "," + idAmbiente + "," + tempAmbiente + "," + tempAgua + ");";

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

    async lista(yyyy_mm_dd_de, yyyy_mm_dd_ate) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpTreino_Lista('" + yyyy_mm_dd_de.replaceAll('-', '/') + "','" + yyyy_mm_dd_ate.replaceAll('-', '/') + "');";

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

module.exports = treinoDados;