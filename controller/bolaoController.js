const apostaDados = require('../dados/bolao/apostaDados');
const campeonatoDados = require('../dados/bolao/campeonatoDados');
const empresaDados = require('../dados/bolao/empresaDados');
const jogadorDados = require('../dados/bolao/jogadorDados');
const jogoDados = require('../dados/bolao/jogoDados');
const pontuacaoDados = require('../dados/bolao/pontuacaoDados');
const timeDados = require('../dados/bolao/timeDados');

exports.apostaGravar = (req, res) => {
    (async () => {
        try {
            const dados = new apostaDados();
            const idCampeonato = req.params.idCampeonato;
            const idJogador = req.params.idJogador;
            const rodada = req.params.rodada;

            const rows = await dados.apostaGravar(idCampeonato, idJogador, rodada);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.apostasDaRodada = (req, res) => {
    (async () => {
        try {
            const dados = new apostaDados();
            const idCampeonato = req.params.idCampeonato;
            const idJogador = req.params.idJogador;
            const rodada = req.params.rodada;

            const rows = await dados.apostasDaRodada(idCampeonato, idJogador, rodada);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.campeonatos = (req, res) => {
    (async () => {
        try {
            const dados = new campeonatoDados();

            const rows = await dados.lista();

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.campeonatosDaEmpresa = (req, res) => {
    (async () => {
        try {
            const idEmpresa = req.params.idEmpresa;
            const dados = new campeonatoDados();

            const rows = await dados.campeonatosDaEmpresa(idEmpresa);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.campeonatoRodadas = (req, res) => {
    (async () => {
        try {
            const idCampeonato = req.params.idCampeonato;
            const dados = new campeonatoDados();

            const rows = await dados.campeonatoRodadas(idCampeonato);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.empresas = (req, res) => {
    (async () => {
        try {
            const dados = new empresaDados();

            const rows = await dados.lista();

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.jogadorGet = (req, res) => {
    (async () => {
        try {
            const dados = new jogadorDados();
            const idEmpresa = req.params.idEmpresa;
            const nomeApelido = req.params.nomeApelido;

            const rows = await dados.get(idEmpresa, nomeApelido);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.jogadorGravar = (req, res) => {
    (async () => {
        try {
            const dados = new jogadorDados();
            const idJogador = req.params.idJogador;
            const idEmpresa = req.params.idEmpresa;
            const nomeApelido = req.params.nomeApelido;
            const senha = req.params.senha;
            const email = req.params.email;

            const rows = await dados.get(idJogador, idEmpresa, nomeApelido, senha, email);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.jogadorLogin = (req, res) => {
    (async () => {
        try {
            const dados = new jogadorDados();
            const idEmpresa = req.params.idEmpresa;
            const nomeApelido = req.params.nomeApelido;
            const senha = req.params.senha;

            const rows = await dados.login(idEmpresa, nomeApelido, senha);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.jogosDaRodada = (req, res) => {
    (async () => {
        try {
            const dados = new jogoDados();
            const idCampeonato = req.params.idCampeonato;
            const rodada = req.params.rodada;

            const rows = await dados.jogosDaRodada(idCampeonato, rodada);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.pontuacaoLista = (req, res) => {
    (async () => {
        try {
            const dados = new pontuacaoDados();

            const rows = await dados.lista();

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.rodadaAtual = (req, res) => {
    (async () => {
        try {
            const dados = new jogoDados();
            const idCampeonato = req.params.idCampeonato;

            const rows = await dados.rodadaAtual(idCampeonato);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.timesDoCampeonato = (req, res) => {
    (async () => {
        try {
            const id = req.params.id;

            const dados = new timeDados();

            const rows = await dados.timesDoCampeonato(id);

            res.status(200).json(rows);

            /*
            const [rows] = await db.query(
                "CALL sp_buscar_cliente(?)",
                [id]
            );
            */
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};