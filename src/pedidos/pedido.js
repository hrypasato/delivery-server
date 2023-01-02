const PedidoSchema = require('./pedidoSchema');
const { exclude } = require('../helpers');

const clientes = { clientes:true };
const productos = { productos:true };

const findPedidosBy = async ( filterparams ) => {
    const pedidos = await PedidoSchema.find({ ...filterparams });
    return pedidos;
}


const findPedido = async ( { id } ) => {
    const pedidoResp = await PedidoSchema.findById(id);
    //const pedido = exclude(pedidoResp, pedidosExcludeFields);
    return pedidoResp;
}

const createPedido = async ( args ) => {
    const newPedido = new PedidoSchema({ ...args });

    await newPedido.save()
    return newPedido;
}

const updatePedido = async ( { id }, data ) => {
    const pedidoUpdated = await PedidoSchema.findByIdAndUpdate(id, { ...data }, { new: true })
    return pedidoUpdated;
}

module.exports = {
    createPedido,
    findPedidosBy,
    findPedido,
    updatePedido,
}