const express = require("express");
const apicache = require("apicache");

const controller = require('./tiendaController');

const cache = apicache.middleware;

const router = express.Router();

router.get("/", cache("2 minutes"), controller.getAllTiendas);


module.exports = router;