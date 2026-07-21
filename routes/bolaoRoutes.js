const express = require('express');
const router = express.Router();

const bolaoController = require('../controller/bolaoController');

router.get('/apostaGravar/:idAposta/:idCampeonatoJogo/:idJogador/:golsTimeCasa/:golsTimeVisitante', bolaoController.apostaGravar);
router.get('/apostasDaRodada/:idCampeonato/:idJogador/:rodada', bolaoController.apostasDaRodada);
router.get('/campeonatoRodadas/:idCampeonato', bolaoController.campeonatoRodadas);
router.get('/campeonatosDaEmpresa/:idEmpresa', bolaoController.campeonatosDaEmpresa);
router.get('/campeonatos', bolaoController.campeonatos);
router.get('/empresas', bolaoController.empresas);
router.get('/jogadorGet/:idEmpresa/:nomeApelido', bolaoController.jogadorGet);
router.get('/jogadorGravar/:idJogador/:idEmpresa/:nomeApelido/:senha/:email', bolaoController.jogadorGravar);
router.get('/jogadorLogin/:idEmpresa/:nomeApelido/:senha', bolaoController.jogadorLogin);
router.get('/jogosDaRodada/:idCampeonato/:rodada', bolaoController.jogosDaRodada);
router.get('/pontuacaoLista', bolaoController.pontuacaoLista);
router.get('/rodadaAtual/:idCampeonato', bolaoController.rodadaAtual);
router.get('/timescampeonato/:id', bolaoController.timesDoCampeonato);

module.exports = router;