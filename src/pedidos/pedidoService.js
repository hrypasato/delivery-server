const Pedido = require('./pedido');
const ProdcutoService = require('../productos/productoService');

const getPedidos = async ( filterparams ) => {
    const pedidos = await Pedido.findPedidos(filterparams);
    return pedidos;
}

const getPedido = async ( filterparams ) => {
    const pedido = await Pedido.findPedido(filterparams);
    return pedido;
}


const createPedido = async ( args ) => {
    const{ ubicacion = {}, productos:productosIds = [], ...rest } = args;
    
    const productos = await Promise.all(
        productosIds.map(async ({ id, cantidad }) => {
            const { nombre, precio, tienda } = await ProdcutoService.getProductoBy({ id });
            return { nombre, precio, cantidad, tienda };
        })
    );
    
    const newPedido = await Pedido.createPedido({ ubicacion, productos , ...rest });
    
    return newPedido;
}

const updatePedido = async ( pedidoId, args) => {
    const where = { id:pedidoId };
    const pedidoUpdated = await Pedido.updatePedido( where, { ...args });
    return pedidoUpdated;
}

module.exports = {
    getPedidos,
    getPedido,
    createPedido,
    updatePedido,
}