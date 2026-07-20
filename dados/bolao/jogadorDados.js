const conexao = require('../conexao');

class jogadorDados {

    constructor() {};

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

module.exports = jogadorDados;