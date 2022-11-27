const { request, response } = require("express")

const PedidoService = require('./pedidoService');


const getAllPedidos = async (req = request, res = response) => {
    const pedidos = await PedidoService.getPedidos({});
    res.json({
        ok:true,
        pedidos,
    });
}

const getPedidosPendientes = async (req = request, res = response) =>{
    const { cliente } = req.query;
    
    const where = { completado:false };


    if(!!cliente){
        const cliente_id = parseInt(cliente);
        where['cliente_id'] = cliente_id;
    }

    const pedidosPendientes = await PedidoService.getPedidos({ ...where })
    
    res.json({
        ok:true,
        pedidos:pedidosPendientes,
    })
}

const createPedido = async (req = request, res = response) => {
    /**
     * cliente:int -> id del cliente
     * producto:int -> id del producto
     * unidades:int -> numero de unidades del producto
     */
    const { cliente, producto, unidades } = req.body;
    const pedidoToCreate = {
        cliente_id:cliente,
        producto_id:producto,
        unidades,
    }

    const newPedido = await PedidoService.createPedido(pedidoToCreate);
    
    res.json({
        ok:true,
        pedido:newPedido,
    })
}

const completePedido = async (req = request, res = response) => {
    const { id } = req.params;
    const pedidoId = parseInt(id);
    
    const data = { completado:true, completed_at:new Date() };
    const pedidoUpdated = await PedidoService.updatePedido(pedidoId, { ...data });
    
    res.json({
        ok:true,
        pedido:pedidoUpdated,
    });

}

module.exports = {
    getAllPedidos,
    getPedidosPendientes,
    createPedido,
    completePedido,
}