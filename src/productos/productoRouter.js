const express = require("express");
const apicache = require("apicache");

const controller = require('./productoController');

const cache = apicache.middleware;

const router = express.Router();

router.get("/", cache("2 minutes"), controller.getAllProductos);
router.get("/:id", cache("2 minutes"), controller.getProductoById);

module.exports = router;