const express = require("express"); 
const cors = require('cors');

const v1PedidosRouter = require('./pedidos/pedidoRouter');
const v1ProductosRouter = require('./productos/productoRouter');


const app = express(); 
const PORT = process.env.PORT || 3000; 

BigInt.prototype.toJSON = function() {return this.toString()}

app.use(cors());
app.use(express.json());

app.use("/api/v1/pedidos", v1PedidosRouter);
app.use("/api/v1/productos", v1ProductosRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`);
});