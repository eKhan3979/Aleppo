const express = require('express');
const router = express.Router();

const knationController = require('../controller/knationController');

router.get('/ambienteLista', knationController.ambienteLista);
router.get('/estiloLista', knationController.estiloLista);
router.get('/parciaisExcluir/:idTreino', knationController.parciaisExcluir);
router.get('/parcialGravar/:idTreino/:idEstilo/:distancia/:segundosGastos/:repeticoes', knationController.parcialGravar);
router.get('/parciaisDoTreino/:idTreino', knationController.parciaisDoTreino);
router.get('/treinoDelete/:idTreino', knationController.treinoDelete);
router.get('/treinoEstatisticaMensal/:yyyy_mm_dd_de/:yyyy_mm_dd_ate', knationController.treinoEstatisticaMensal);
router.get('/treinoGravar/:idTreino/:yyyy_Mm_Dd/:hh_Mm/:total/:segundosGastos/:idAmbiente/:tempAmbiente/:tempAgua', knationController.treinoGravar);
router.get('/treinoLista/:idTreino', knationController.treinoLista);

module.exports = router;