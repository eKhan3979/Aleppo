const express = require('express');
const router = express.Router();

//const autenticar = require('../middleware/auth');

const bolaoController = require('../controller/bolaoController');

router.get('/bolao/apostaGravar/:idAposta/:idCampeonatoJogo/:idJogador/:golsTimeCasa/:golsTimeVisitante', bolaoController.apostaGravar);
router.get('/bolao/apostasDaRodada/:idCampeonato/:idJogador/:rodada', bolaoController.apostasDaRodada);
router.get('/bolao/campeonatoGravar/:idCampeonato/:nome/:ano/:ativo', bolaoController.campeonatoGravar);
router.get('/bolao/campeonatoTimeInsert/:idCampeonato/:idTime', bolaoController.campeonatoTimeInsert);
router.get('/bolao/campeonatoRodadas/:idCampeonato', bolaoController.campeonatoRodadas);
router.get('/bolao/campeonatosDaEmpresa/:idEmpresa', bolaoController.campeonatosDaEmpresa);
router.get('/bolao/campeonatos', bolaoController.campeonatos);
router.get('/bolao/empresas', bolaoController.empresas);
router.get('/bolao/empresaRanking/:idEmpresa/:idCampeonato', bolaoController.empresaRanking);
router.get('/bolao/jogadorGet/:idEmpresa/:nomeApelido', bolaoController.jogadorGet);
router.get('/bolao/jogadorGravar/:idJogador/:idEmpresa/:nomeApelido/:senha/:email', bolaoController.jogadorGravar);
router.get('/bolao/jogadorListaEmpresa/:idEmpresa', bolaoController.jogadorListaEmpresa);
router.get('/bolao/jogadorLogin/:idEmpresa/:nomeApelido/:senha', bolaoController.jogadorLogin);
router.get('/bolao/jogoExcluir/:idCampeonatoJogo', bolaoController.jogoExcluir);
router.get('/bolao/jogoInsert/:idCampeonato/:rodada/:rodadaNome/:yyyy_Mm_Dd/:hh_Mm/:idTimeCasa/:idTimeVisitante', bolaoController.jogoInsert);
router.get('/bolao/jogoResultado/:id/:golsCasa/:golsVisitante/:finalizado', bolaoController.jogoResultado);
router.get('/bolao/jogosDaRodada/:idCampeonato/:rodada', bolaoController.jogosDaRodada);
router.get('/bolao/meusPontos/:idJogador/:idCampeonato', bolaoController.meusPontos);
router.get('/bolao/pontuacaoLista', bolaoController.pontuacaoLista);
router.get('/bolao/pontosJogador/:idJogador/:idCampeonato/:rodada', bolaoController.pontosJogador);
router.get('/bolao/rankingRodada/:idEmpresa/:idCampeonato/:rodada', bolaoController.rankingRodada);
router.get('/bolao/rodadaAtual/:idCampeonato', bolaoController.rodadaAtual);
router.get('/bolao/teste', bolaoController.teste);
router.get('/bolao/timeGravar/:idTime/:nome/:uf/:cidade/:ativo/:abreviatura', bolaoController.timeGravar);
router.get('/bolao/timescampeonato/:id', bolaoController.timesDoCampeonato);
router.get('/bolao/timescampeonatodisponiveis/:id', bolaoController.timesCampeonatoDisponiveis);
router.get('/bolao/timesLista', bolaoController.timesLista);

module.exports = router;