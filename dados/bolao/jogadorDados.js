import conexao from '../conexao.js';

class jogadorDados {

    constructor() {};

    async change(idJogador, senha) {
        let conn;
        let ok = false;

        try {
            let sql = "Call u258112148_1.SpBJogador_Change (" + idJogador + ",'" + senha + "');";

            conn = await conexao.getConnection();

            await conn.execute(
                sql
            );

            let ok = true;
        } catch (e) {
            throw e;
        } finally {
            if (conn) await conn.release();
        }

        return ok;
    }

    async get(idEmpresa, nomeApelido) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBJogador_Get(" + idEmpresa + ",'" + nomeApelido + "');";

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

    async gravar(idJogador, idEmpresa, nomeApelido, senha, email) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBJogador_Gravar(" + idJogador + "," + idEmpresa + ",'" + nomeApelido + "','" + senha + "','" + email + "');";

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

    async listaDaEmpresa(idEmpresa) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBJogador_ListaDaEmpresa(" + idEmpresa + ");";

            conn = await conexao.getConnection();

            const rows = await conn.query(
                sql
            );

            return rows[0];
        } catch (e) {
            throw e;
        } finally {
            if (conn) await conn.release();
        }
    }

    async loginToken(email, senha) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBLogin('" + email + "','" + senha + "');";

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

    async login(idEmpresa, nomeApelido, senha) {
        let conn;

        try {
            let sql = "Call u258112148_1.SpBJogador_Login(" + idEmpresa + ",'" + nomeApelido + "','" + senha + "');";

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

export default jogadorDados;