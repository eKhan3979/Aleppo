import express from 'express';
import {
    apostaGravar,
    apostasDaRodada,
    apostasJogadorCampeonato,
    apostasJogadorRodada,
    apostasRankingCampeonato,
    campeonatoGravar,
    campeonatoTimeInsert,
    campeonatoRodadas,
    campeonatosDaEmpresa,
    campeonatos,
    empresaGet,
    empresas,
    empresaRanking,
    jogadorChange,
    jogadorGet,
    jogadorGravar,
    jogadorListaEmpresa,
    jogadorLogin,
    jogoExcluir,
    jogoInsert,
    jogoResultado,
    jogosDaRodada,
    loginToken,
    meusPontos,
    pontuacaoLista,
    pontosJogador,
    rankingRodada,
    rodadaAtual,
    teste,
    timeGravar,
    timesDoCampeonato,
    timesCampeonatoDisponiveis,
    timesLista    
} from '../controller/bolaoController.js';

const router = express.Router();

router.get('/apostaGravar/:idAposta/:idCampeonatoJogo/:idJogador/:golsTimeCasa/:golsTimeVisitante', apostaGravar);
router.get('/apostasDaRodada/:idCampeonato/:idJogador/:rodada', apostasDaRodada);
router.get('/apostasJogadorCampeonato/:idJogador/:idCampeonato', apostasJogadorCampeonato);
router.get('/apostasJogadorRodada/:idJogador/:idCampeonato/:rodada', apostasJogadorRodada);
router.get('/apostasRankingCampeonato/:idEmpresa/:idCampeonato', apostasRankingCampeonato);
router.get('/campeonatoGravar/:idCampeonato/:nome/:ano/:ativo', campeonatoGravar);
router.get('/campeonatoTimeInsert/:idCampeonato/:idTime', campeonatoTimeInsert);
router.get('/campeonatoRodadas/:idCampeonato', campeonatoRodadas);
router.get('/campeonatosDaEmpresa/:idEmpresa', campeonatosDaEmpresa);
router.get('/campeonatos', campeonatos);
router.get('/empresas', empresas);
router.get('/empresaGet/:idEmpresa', empresaGet);
router.get('/empresaRanking/:idEmpresa/:idCampeonato', empresaRanking);
router.get('/jogadorChange/:idJogador/:senha', jogadorChange);
router.get('/jogadorGet/:idEmpresa/:nomeApelido', jogadorGet);
router.get('/jogadorGravar/:idJogador/:idEmpresa/:nomeApelido/:senha/:email', jogadorGravar);
router.get('/jogadorListaEmpresa/:idEmpresa', jogadorListaEmpresa);
router.get('/jogadorLogin/:idEmpresa/:nomeApelido/:senha', jogadorLogin);
router.get('/jogoExcluir/:idCampeonatoJogo', jogoExcluir);
router.get('/jogoInsert/:idCampeonato/:rodada/:rodadaNome/:yyyy_Mm_Dd/:hh_Mm/:idTimeCasa/:idTimeVisitante', jogoInsert);
router.get('/jogoResultado/:id/:golsCasa/:golsVisitante/:finalizado', jogoResultado);
router.get('/jogosDaRodada/:idCampeonato/:rodada', jogosDaRodada);
router.get('/loginToken/:email/:senha', loginToken);
router.get('/meusPontos/:idJogador/:idCampeonato', meusPontos);
router.get('/pontuacaoLista', pontuacaoLista);
router.get('/pontosJogador/:idJogador/:idCampeonato/:rodada', pontosJogador);
router.get('/rankingRodada/:idEmpresa/:idCampeonato/:rodada', rankingRodada);
router.get('/rodadaAtual/:idCampeonato', rodadaAtual);
router.get('/teste', teste);
router.get('/timeGravar/:idTime/:nome/:uf/:cidade/:ativo/:abreviatura/:tipo', timeGravar);
router.get('/timescampeonato/:id', timesDoCampeonato);
router.get('/timescampeonatodisponiveis/:id', timesCampeonatoDisponiveis);
router.get('/timesLista', timesLista);

export default router;