const express = require("express");
const apicache = require("apicache");

const controller = require('./productoController');

const cache = apicache.middleware;

const router = express.Router();

router.get("/", cache("2 minutes"), controller.getAllProductos);
router.get("/byid/:id", cache("2 minutes"), controller.getProductoById);
router.get("/bytienda/:tienda", cache("2 minutes"), controller.getProductosByTienda);

module.exports = router;