const express = require('express');
const router = express.Router();

const autenticar = require('../middleware/auth');

const bolaoController = require('../controller/bolaoController');

router.get('/apostaGravar/:idAposta/:idCampeonatoJogo/:idJogador/:golsTimeCasa/:golsTimeVisitante', autenticar, bolaoController.apostaGravar);
router.get('/apostasDaRodada/:idCampeonato/:idJogador/:rodada', autenticar, bolaoController.apostasDaRodada);
router.get('/campeonatoGravar/:idCampeonato/:nome/:ano/:ativo', autenticar, bolaoController.campeonatoGravar);
router.get('/campeonatoTimeInsert/:idCampeonato/:idTime', autenticar, bolaoController.campeonatoTimeInsert);
router.get('/campeonatoRodadas/:idCampeonato', autenticar, bolaoController.campeonatoRodadas);
router.get('/campeonatosDaEmpresa/:idEmpresa', autenticar, bolaoController.campeonatosDaEmpresa);
router.get('/campeonatos', autenticar, bolaoController.campeonatos);
router.get('/empresas', autenticar, bolaoController.empresas);
router.get('/empresaRanking/:idEmpresa/:idCampeonato', autenticar, bolaoController.empresaRanking);
router.get('/jogadorGet/:idEmpresa/:nomeApelido', autenticar, bolaoController.jogadorGet);
router.get('/jogadorGravar/:idJogador/:idEmpresa/:nomeApelido/:senha/:email', autenticar, bolaoController.jogadorGravar);
router.get('/jogadorListaEmpresa/:idEmpresa', autenticar, bolaoController.jogadorListaEmpresa);
router.get('/jogadorLogin/:idEmpresa/:nomeApelido/:senha', autenticar, bolaoController.jogadorLogin);
router.get('/jogoExcluir/:idCampeonatoJogo', autenticar, bolaoController.jogoExcluir);
router.get('/jogoInsert/:idCampeonato/:rodada/:rodadaNome/:yyyy_Mm_Dd/:hh_Mm/:idTimeCasa/:idTimeVisitante', autenticar, bolaoController.jogoInsert);
router.get('/jogoResultado/:id/:golsCasa/:golsVisitante/:finalizado', autenticar, bolaoController.jogoResultado);
router.get('/jogosDaRodada/:idCampeonato/:rodada', autenticar, bolaoController.jogosDaRodada);
router.get('/meusPontos/:idJogador/:idCampeonato', autenticar, bolaoController.meusPontos);
router.get('/pontuacaoLista', autenticar, bolaoController.pontuacaoLista);
router.get('/pontosJogador/:idJogador/:idCampeonato/:rodada', autenticar, bolaoController.pontosJogador);
router.get('/rankingRodada/:idEmpresa/:idCampeonato/:rodada', autenticar, bolaoController.rankingRodada);
router.get('/rodadaAtual/:idCampeonato', autenticar, bolaoController.rodadaAtual);
router.get('/teste', autenticar, bolaoController.teste);
router.get('/timeGravar/:idTime/:nome/:uf/:cidade/:ativo/:abreviatura', autenticar, bolaoController.timeGravar);
router.get('/timescampeonato/:id', autenticar, bolaoController.timesDoCampeonato);
router.get('/timescampeonatodisponiveis/:id', autenticar, bolaoController.timesCampeonatoDisponiveis);
router.get('/timesLista', autenticar, bolaoController.timesLista);

module.exports = router;