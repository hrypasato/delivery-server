const Pedido = require('./pedido');

const getPedidos = async ( filterparams ) => {
    const pedidos = await Pedido.findPedidos(filterparams);
    return pedidos;
}

const getPedido = async ( filterparams ) => {
    const pedido = await Pedido.findPedido(filterparams);
    return pedido;
}


const createPedido = async ( args ) => {

    const newPedido = await Pedido.createPedido({ ...args });
    
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