const express = require("express");

const controller = require('./pedidoController');

const router = express.Router();

router.get("/", controller.getAllPedidos);
router.get("/byid/:id", controller.getPedidoById);
router.get("/pendientes", controller.getPedidosPendientes);
router.post("/", controller.createPedido);
router.put("/completed/:id", controller.completePedido);

module.exports = router;