const database = require('../database');
const { listExclude, exclude } = require('../helpers');

const pedidosExcludeFields = ['cliente_id', 'producto_id']; 

const clientes = { clientes:true };
const productos = { productos:true };

const findPedidos = async ( filterparams ) => {
    const pedidos = await database.pedidos.findMany({
        where:{
            ...filterparams,
        },
        include:{
            ...clientes,
            ...productos,
        },
    });

    const listPedidos = listExclude(pedidos, pedidosExcludeFields);

    return listPedidos;
}


const findPedido = async ( filterparams ) => {
    const pedidoResp = await database.pedidos.findUnique({
        where:{
            ...filterparams,
        },
        include:{
            ...clientes,
            ...productos,
        }
    });
    const pedido = exclude(pedidoResp, pedidosExcludeFields);
    return pedido;
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
    findPedido,
    updatePedido,
}