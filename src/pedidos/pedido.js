const database = require('../database');

const findPedidos = async ( filterparams ) => {
    const pedidos = await database.pedidos.findMany({
        where:{
            ...filterparams,
        }
    });

    return pedidos;
}

const createPedido = async ( pedido ) => {
    const newPedido = await database.pedidos.create( { data:{ ...pedido } });
    return newPedido;
}

const updatePedido = async ( filterparams, fields ) => {
    const pedidoUpdated = await database.pedidos.update({
        where:{
            ...filterparams,
        },
        data:{
            ...fields,
        }
    });

    return pedidoUpdated;
}

module.exports = {
    createPedido,
    findPedidos,
    updatePedido,
}