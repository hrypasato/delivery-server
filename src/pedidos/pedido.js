const PedidoSchema = require('./pedidoSchema');
const { exclude } = require('../helpers');

const clientes = { clientes:true };
const productos = { productos:true };

const findPedidos = async ( filterparams ) => {
    const pedidos = await PedidoSchema.find();
    return pedidos;
}


const findPedido = async ( filterparams ) => {
    const pedidoResp = await postgres.pedidos.findUnique({
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
    const newPedido = await postgres.pedidos.create( { data:{ ...pedido } });
    return newPedido;
}

const updatePedido = async ( filterparams, fields ) => {
    const pedidoUpdated = await postgres.pedidos.update({
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