const express = require('express');
const router = express.Router();

const bolaoController = require('../controller/bolaoController');

router.get('/apostaGravar/:idAposta/:idCampeonatoJogo/:idJogador/:golsTimeCasa/:golsTimeVisitante', bolaoController.apostaGravar);
router.get('/apostasDaRodada/:idCampeonato/:idJogador/:rodada', bolaoController.apostasDaRodada);
router.get('/campeonatoGravar/:idCampeonato/:nome/:ano/:ativo', bolaoController.campeonatoGravar);
router.get('/campeonatoRodadas/:idCampeonato', bolaoController.campeonatoRodadas);
router.get('/campeonatosDaEmpresa/:idEmpresa', bolaoController.campeonatosDaEmpresa);
router.get('/campeonatos', bolaoController.campeonatos);
router.get('/empresas', bolaoController.empresas);
router.get('/jogadorGet/:idEmpresa/:nomeApelido', bolaoController.jogadorGet);
router.get('/jogadorGravar/:idJogador/:idEmpresa/:nomeApelido/:senha/:email', bolaoController.jogadorGravar);
router.get('/jogadorLogin/:idEmpresa/:nomeApelido/:senha', bolaoController.jogadorLogin);
router.get('/jogoExcluir/:idCampeonatoJogo', bolaoController.jogoExcluir);
router.get('/jogoInsert/:idCampeonato/:rodada/:rodadaNome/:yyyy_Mm_Dd/:hh_Mm/:idTimeCasa/:idTimeVisitante', bolaoController.jogoInsert);
router.get('/jogoResultado/:id/:golsCasa/:golsVisitante/:finalizado', bolaoController.jogoResultado);
router.get('/jogosDaRodada/:idCampeonato/:rodada', bolaoController.jogosDaRodada);
router.get('/meusPontos/:idJogador/:idCampeonato', bolaoController.meusPontos);
router.get('/pontuacaoLista', bolaoController.pontuacaoLista);
router.get('/pontosJogador/:idJogador/:idCampeonato/:rodada', bolaoController.pontosJogador);
router.get('/rankingRodada/:idEmpresa/:idCampeonato/:rodada', bolaoController.rankingRodada);
router.get('/rodadaAtual/:idCampeonato', bolaoController.rodadaAtual);
router.get('/timeGravar/:idTime/:nome/:uf/:cidade/:ativo/:abreviatura', bolaoController.timeGravar);
router.get('/timescampeonato/:id', bolaoController.timesDoCampeonato);
router.get('/timescampeonatodisponiveis/:id', bolaoController.timesCampeonatoDisponiveis);
router.get('/timesLista', bolaoController.timesLista);

module.exports = router;