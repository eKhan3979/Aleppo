class TimeModel {
    constructor({ idTime, nome, uf, cidade, ativo, abreviatura }) {
        this.IdTime = idTime, 
        this.Nome = nome,
        this.UF = uf,
        this.Cidade = cidade,
        this.Ativo = ativo,
        this.Abreviatura = abreviatura
    }

    static fromRow(row) {
        return new TimeModel(
            row.IdTime, 
            row.Nome, 
            row.UF, 
            row.Cidade, 
            row.Ativo, 
            row.Abreviatura);
    }
}

module.exports = TimeModel;