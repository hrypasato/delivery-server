const express = require("express"); 
const cors = require('cors');
const dotenv = require('dotenv')

const v1PedidosRouter = require('./pedidos/pedidoRouter');
const v1ProductosRouter = require('./productos/productoRouter');
const v1MotorizadoRouter = require('./motorizado/motorizadoRouter');

dotenv.config()

const app = express(); 
const PORT = process.env.PORT || 3000; 

BigInt.prototype.toJSON = function() {return this.toString()}

app.use(cors());
app.use(express.json());

app.use("/api/v1/pedidos", v1PedidosRouter);
app.use("/api/v1/productos", v1ProductosRouter);
app.use("/api/v1/motorizados", v1MotorizadoRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`);
});