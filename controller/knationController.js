const parcialDados = require('../dados/knation/parcialDados');
const treinoDados = require('../dados/knation/treinoDados');

exports.ambienteLista = (req, res) => {
    (async () => {
        try {
            const ambienteDados = require('../dados/knation/ambienteDados');

            const dados = new ambienteDados();

            const rows = await dados.lista();

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.estiloLista = (req, res) => {
    (async () => {
        try {
            const estiloDados = require('../dados/knation/estiloDados');

            const dados = new estiloDados();

            const rows = await dados.lista();

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.parciaisExcluir = (req, res) => {
    (async () => {
        try {
            const dados = new parcialDados();
            const idTreino = req.params.idTreino;

            const rows = await dados.excluir(idTreino);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.parcialGravar = (req, res) => {
    (async () => {
        try {
            const dados = new parcialDados();

            const idTreino = req.params.idTreino;
            const idEstilo = req.params.idEstilo;
            const distancia = req.params.distancia;
            const segundosGastos = req.params.segundosGastos;
            const repeticoes = req.params.repeticoes;

            const rows = await dados.gravar(idTreino, idEstilo, distancia, segundosGastos, repeticoes);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.parciaisDoTreino = (req, res) => {
    (async () => {
        try {
            const dados = new parcialDados();

            const idTreino = req.params.idTreino;

            const rows = await dados.parciaisDoTreino(idTreino);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.treinoDelete = (req, res) => {
    (async () => {
        try {
            const dados = new treinoDados();

            const idTreino = req.params.idTreino;

            const rows = await dados.delete(idTreino);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.treinoEstatisticaMensal = (req, res) => {
    (async () => {
        try {
            const dados = new treinoDados();

            const yyyy_mm_dd_de = req.params.yyyy_mm_dd_de;
            const yyyy_mm_dd_ate = req.params.yyyy_mm_dd_ate;

            const rows = await dados.estatisticaMensal(yyyy_mm_dd_de, yyyy_mm_dd_ate);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.treinoGravar = (req, res) => {
    (async () => {
        try {
            const dados = new treinoDados();
            
            const idTreino = req.params.idTreino;
            const yyyy_Mm_Dd = req.params.yyyy_Mm_Dd;
            const hh_Mm = req.params.hh_Mm;
            const total = req.params.total;
            const segundosGastos = req.params.segundosGastos;
            const idAmbiente = req.params.idAmbiente;
            const tempAmbiente = req.params.tempAmbiente;
            const tempAgua = req.params.tempAgua;

            const rows = await dados.gravar(idTreino, yyyy_Mm_Dd, hh_Mm, total, segundosGastos, idAmbiente, tempAmbiente, tempAgua);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.treinoLista = (req, res) => {
    (async () => {
        try {
            const dados = new treinoDados();

            const yyyy_mm_dd_de = req.params.yyyy_mm_dd_de;
            const yyyy_mm_dd_ate = req.params.yyyy_mm_dd_ate;

            const rows = await dados.lista(yyyy_mm_dd_de, yyyy_mm_dd_ate);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};