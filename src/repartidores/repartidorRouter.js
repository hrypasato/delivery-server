const express = require('express');

const controller = require('./repartidorController');

const router = express.Router();

router.get('/', controller.getRepartidores);
router.post('/', controller.createRepartidor);
router.put('/:id', controller.updateRepartidor);

module.exports = router;