import express from 'express';

import {
    ambienteLista,
    estiloLista,
    parciaisExcluir,
    parcialGravar,
    parciaisDoTreino,
    treinoDelete,
    treinoEstatisticaMensal,
    treinoGravar,
    treinoLista
} from '../controller/knationController.js';

const router = express.Router();

router.get('/ambienteLista', ambienteLista);
router.get('/estiloLista', estiloLista);
router.get('/parciaisExcluir/:idTreino', parciaisExcluir);
router.get('/parcialGravar/:idTreino/:idEstilo/:distancia/:segundosGastos/:repeticoes', parcialGravar);
router.get('/parciaisDoTreino/:idTreino', parciaisDoTreino);
router.get('/treinoDelete/:idTreino', treinoDelete);
router.get('/treinoEstatisticaMensal/:yyyy_mm_dd_de/:yyyy_mm_dd_ate', treinoEstatisticaMensal);
router.get('/treinoGravar/:idTreino/:yyyy_Mm_Dd/:hh_Mm/:total/:segundosGastos/:idAmbiente/:tempAmbiente/:tempAgua', treinoGravar);
router.get('/treinoLista/:yyyy_mm_dd_de/:yyyy_mm_dd_ate', treinoLista);

export default router;