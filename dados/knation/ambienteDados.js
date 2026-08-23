import conexao from '../conexao.js';

class ambienteDados {

    constructor() {};

    async listaCampeonatos() {
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

    async lista() {
        let conn;

        try {
            let sql = "Call u258112148_1.SpAmbiente_Todos();";

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

export default ambienteDados;