const PedidoSchema = require('./pedidoSchema');
const { exclude } = require('../helpers');

const clientes = { clientes:true };
const productos = { productos:true };

const findPedidosBy = async ( filterparams ) => {
    const pedidos = await PedidoSchema.find({ ...filterparams });
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

const createPedido = async ( args ) => {
    const newPedido = new PedidoSchema({ ...args });

    await newPedido.save()
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
    findPedidosBy,
    findPedido,
    updatePedido,
}