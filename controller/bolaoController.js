import apostaDados from '../dados/bolao/apostaDados.js';
import campeonatoDados from '../dados/bolao/campeonatoDados.js'; 
import empresaDados from '../dados/bolao/empresaDados.js';
import jogadorDados from '../dados/bolao/jogadorDados.js';
import jogoDados from '../dados/bolao/jogadorDados.js';
import pontuacaoDados from '../dados/bolao/pontuacaoDados.js';
import timeDados from '../dados/bolao/timeDados.js';

BigInt.prototype.toJSON = function () {
  return this.toString();
};

export const apostaGravar = (req, res) => {
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

export const apostasDaRodada = (req, res) => {
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

export const apostasJogadorCampeonato = (req, res) => {
    (async () => {
        try {
            const dados = new apostaDados();

            const idJogador = req.params.idJogador;
            const idCampeonato = req.params.idCampeonato;

            const rows = await dados.apostasJogadorCampeonato(idJogador, idCampeonato);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

export const apostasJogadorRodada = (req, res) => {
    (async () => {
        try {
            const dados = new apostaDados();

            const idJogador = req.params.idJogador;
            const idCampeonato = req.params.idCampeonato;
            const rodada = req.params.rodada;

            const rows = await dados.apostasJogadorRodada(idJogador, idCampeonato, rodada);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

export const apostasRankingCampeonato = (req, res) => {
    (async () => {
        try {
            const dados = new apostaDados();

            const idEmpresa = req.params.idEmpresa;
            const idCampeonato = req.params.idCampeonato;

            const rows = await dados.apostasRankingCampeonato(idEmpresa, idCampeonato);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();   
};

export const campeonatoGravar = (req, res) => {
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

export const campeonatos = (req, res) => {
    (async () => {
        try {
            console.log("112");
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

export const campeonatosDaEmpresa = (req, res) => {
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

export const campeonatoRodadas = (req, res) => {
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

export const campeonatoTimeInsert = (req, res) => {
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

export const empresaRanking = (req, res) => {
    (async () => {
        try {
            const dados = new apostaDados();
            const idEmpresa = req.params.idEmpresa;
            const idCampeonato = req.params.idCampeonato;

            const rows = await dados.empresaRanking(idEmpresa, idCampeonato);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();
};

export const empresas = (req, res) => {
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

export const jogadorGet = (req, res) => {
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

export const jogadorGravar = (req, res) => {
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

export const jogadorListaEmpresa = (req, res) => {
    (async () => {
        try {
            const dados = new jogadorDados();
            const idEmpresa = req.params.idEmpresa;

            const rows = await dados.listaDaEmpresa(idEmpresa);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();
}

export const jogadorLogin = (req, res) => {
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

export const jogoExcluir = (req, res) => {
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

export const jogoInsert = (req,  res) => {
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

export const jogoResultado = (req, res) => {
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

export const jogosDaRodada = (req, res) => {
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

export const login = (req, res) => {
    (async () => {
        try {
            const dados = new jogadorDados();
            const email = req.params.email;
            const senha = req.params.senha;

            const rows = await dados.loginToken(email, senha);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();
};

export const loginToken = (req, res) => {
    (async () => {
        console.log(req.params.email);
        /*
        try {
            const dados = new jogadorDados();
            const email = req.params.email;
            const senha = req.params.senha;
console.log(email);
console.log(senha);
            const rows = await dados.loginToken(email, senha);
console.log(rows);
            res.status(200).json(rows);
        } catch (erro) {
        res.status(500).json({
            erro: erro.message
        });
        }
        */
    })
};

export const meusPontos = (req, res) => {
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

export const pontosJogador = (req, res) => {
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

export const pontuacaoLista = (req, res) => {
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

export const rankingRodada = (req, res) => {
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

export const rodadaAtual = (req, res) => {
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

export const teste = (req, res) => {
    (() => {
        res.json({
            message: "Teste OK !"
        });
    })
}

export const timeGravar = (req, res) => {
    (async () => {
        try {
            const dados = new timeDados();
            const idTime = req.params.idTime;
            const nome = req.params.nome;
            const uf = req.params.uf;
            const cidade = req.params.cidade;
            const ativo = req.params.ativo;
            const abreviatura = req.params.abreviatura;
            const tipo = req.params.tipo;

            const rows = await dados.gravar(idTime, nome, uf, cidade, ativo, abreviatura, tipo);

            res.status(200).json(rows);
        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    })();
};

export const timesCampeonatoDisponiveis = (req, res) => {
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

export const timesDoCampeonato = (req, res) => {
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

export const timesLista = (req, res) => {
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