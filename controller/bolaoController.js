const apostaDados = require('../dados/bolao/apostaDados');
const campeonatoDados = require('../dados/bolao/campeonatoDados');
const empresaDados = require('../dados/bolao/empresaDados');
const jogadorDados = require('../dados/bolao/jogadorDados');
const jogoDados = require('../dados/bolao/jogoDados');
const pontuacaoDados = require('../dados/bolao/pontuacaoDados');
const timeDados = require('../dados/bolao/timeDados');

BigInt.prototype.toJSON = function () {
  return this.toString();
};

exports.apostaGravar = (req, res) => {
    (async () => {
        try {
            const dados = new apostaDados();

            const idAposta = req.params.idAposta;
            const idCampeonatoJogo = req.params.idCampeonatoJogo;
            const idJogador = req.params.idJogador;
            const golsTimeCasa = req.params.golsTimeCasa;
            const golsTimeVisitante = req.params.golsTimeVisitante;

            const rows = await dados.gravar(idAposta, idCampeonatoJogo, idJogador, golsTimeCasa, golsTimeVisitante);

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

exports.campeonatoGravar = (req, res) => {
    (async () => {
        try {
            const idCampeonato = req.params.idCampeonato;
            const nome = req.params.nome;
            const ano = req.params.ano;
            const ativo = req.params.ativo;

            const dados = new campeonatoDados();

            const rows = await dados.gravar(idCampeonato, nome, ano, ativo);

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

exports.campeonatoTimeInsert = (req, res) => {
    (async () => {
        try {
            const idCampeonato = req.params.idCampeonato;
            const idTime = req.params.idTime;

            const dados = new campeonatoDados();

            const rows = await dados.campeonatoTimeInsert(idCampeonato, idTime);

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

            const rows = await dados.gravar(idJogador, idEmpresa, nomeApelido, senha, email);

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

exports.jogoExcluir = (req, res) => {
    (async () => {
        try {
            const dados = new jogoDados();

            const idCampeonatoJogo = req.params.idCampeonatoJogo;

            const rows = dados.jogoExcluir(idCampeonatoJogo);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();
}

exports.jogoInsert = (req,  res) => {
    (async () => {
        try {
            const dados = new jogoDados();

            const idCampeonato = req.params.idCampeonato;
            const rodada = req.params.rodada;
            const rodadaNome = req.params.rodadaNome;
            const yyyy_Mm_Dd = req.params.yyyy_Mm_Dd;
            const hh_Mm = req.params.hh_Mm;
            const idTimeCasa = req.params.idTimeCasa;
            const idTimeVisitante = req.params.idTimeVisitante;

            const rows = await dados.jogoInsert(idCampeonato, rodada, rodadaNome, yyyy_Mm_Dd, hh_Mm, idTimeCasa, idTimeVisitante);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();
}

exports.jogoResultado = (req, res) => {
    (async () => {
        try {
            const dados = new jogoDados();
            const id = req.params.id;
            const golsCasa = req.params.golsCasa;
            const golsVisitante = req.params.golsVisitante;
            const finalizado = req.params.finalizado;
            const fim = (finalizado ? 1: 0);

            const rows = await dados.jogoResultado(id, golsCasa, golsVisitante, fim);

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

exports.meusPontos = (req, res) => {
    (async () => {
        try {
            const dados = new pontuacaoDados();
            const idJogador = req.params.idJogador;
            const idCampeonato = req.params.idCampeonato;

            const rows = await dados.meusPontos(idJogador, idCampeonato);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.pontosJogador = (req, res) => {
    (async () => {
        try {
            const dados = new apostaDados();

            const idJogador = req.params.idJogador;
            const idCampeonato = req.params.idCampeonato;
            const rodada = req.params.rodada;

            const rows = await dados.pontosJogador(idJogador, idCampeonato, rodada);

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

exports.rankingRodada = (req, res) => {
    (async () => {
        try {
            const dados = new pontuacaoDados();
            const idEmpresa = req.params.idEmpresa;
            const idCampeonato = req.params.idCampeonato;
            const rodada = req.params.rodada;

            const rows = await dados.rankingRodada(idEmpresa, idCampeonato, rodada);

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

            res.status(200).json(rows[0]);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.timeGravar = (req, res) => {
    (async () => {
        try {
            const dados = new timeDados();
            const idTime = req.params.idTime;
            const nome = req.params.nome;
            const uf = req.params.uf;
            const cidade = req.params.cidade;
            const ativo = req.params.ativo;
            const abreviatura = req.params.abreviatura;

            const rows = await dados.gravar(idTime, nome, uf, cidade, ativo, abreviatura);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();
};

exports.timesCampeonatoDisponiveis = (req, res) => {
    (async () => {
        try {
            const id = req.params.id;

            const dados = new timeDados();

            const rows = await dados.timesCampeonatoDisponiveis(id);

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
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

exports.timesLista = (req, res) => {
    (async () => {
        try {
            const dados = new timeDados();

            const rows = await dados.lista();

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};