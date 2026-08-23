import conexao from '../conexao.js';

class empresaDados {

    constructor() {};

    async lista() {
        let conn;

        try {
            let sql = "Call u258112148_1.SpEmpresa_Lista(1);";

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

export default empresaDados;