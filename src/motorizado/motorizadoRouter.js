const express = require('express');

const controller = require('./motorizadoController');

const router = express.Router();

router.post('/', controller.createMotorizado);
router.put('/:id', controller.updateTokenMotorizado);

module.exports = router;