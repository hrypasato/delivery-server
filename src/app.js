const express = require("express"); 
const cors = require('cors');
const dotenv = require('dotenv')

const v1PedidosRouter = require('./pedidos/pedidoRouter');
const v1ProductosRouter = require('./productos/productoRouter');
const v1MotorizadoRouter = require('./motorizado/motorizadoRouter');
const v1TiendasRouter = require('./tiendas/tiendaRouter');

dotenv.config()

const app = express();  


app.use(cors());
app.use(express.json());

app.use("/api/v1/tiendas", v1TiendasRouter);
app.use("/api/v1/pedidos", v1PedidosRouter);
app.use("/api/v1/productos", v1ProductosRouter);
app.use("/api/v1/motorizados", v1MotorizadoRouter);

module.exports = app;