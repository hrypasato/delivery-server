const ProductoService = require('../productos/productoService');
const Pedido = require('./pedido');

const getPedidos = async ( filterparams ) => {
    const pedidos = await Pedido.findPedidos(filterparams);
    return pedidos;
}


const createPedido = async ( args ) => {
    const { producto_id, unidades } = args;
    const producto = await ProductoService.getProductoBy({ id:producto_id });

    const total = producto.precio * unidades; 

    const newPedido = await Pedido.createPedido({ ...args, total });
    
    return newPedido;
}

const updatePedido = async ( pedidoId, args) => {
    const where = { id:pedidoId };
    const pedidoUpdated = await Pedido.updatePedido( where, { ...args });
    return pedidoUpdated;
}

module.exports = {
    getPedidos,
    createPedido,
    updatePedido,
}