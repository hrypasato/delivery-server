const ProductosRouterV1 = require('./productos/productoRouter');
const RepartidoresRouterV1 = require('./repartidores/repartidorRouter');
const TiendasRouterV1 = require('./tiendas/tiendaRouter');
const PedidoRouterV1 = require('./pedidos/pedidoRouter');

const rutas = [
    { path:'/api/v1/pedidos', router: PedidoRouterV1 }, 
    { path:"/api/v1/productos", router: ProductosRouterV1 },
    { path:"/api/v1/tiendas", router: TiendasRouterV1 },
    { path:"/api/v1/repartidores", router: RepartidoresRouterV1 },
];

module.exports = {
    rutas,
}