export class JogadorLoginDto {
    IdJogador = 0;
    IdEmpresa = 0;
    NomeApelido = 0;
    email = "";
    Ativo = true;
    Token = "";

    constructor() {
        this.IdJogador = 0;
        this.IdEmpresa = 0;
        this.NomeApelido = '';
        this.email = '';
        this.Ativo = true;
        this.Token = '';
    }

    /*
    constructor({ idJogador, idEmpresa, nomeApelido, email, ativo, token }) {
        this.IdJogador = idJogador;
        this.IdEmpresa = idEmpresa;
        this.NomeApelido = nomeApelido;
        this.email = email;
        this.Ativo = ativo;
        this.Token = token;
    }
    */
}