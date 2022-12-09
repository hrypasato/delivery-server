const { request, response } = require("express")

const PedidoService = require('./pedidoService');
const NotificacionController = require('../notificationes/notificacionController');


const getAllPedidos = async (req = request, res = response) => {
    const pedidos = await PedidoService.getPedidos({});
    res.json({
        ok:true,
        pedidos,
    });
}

const getPedido = async (req = request, res = response) => {
    const { id } = req.params;
    const pedidoId = parseInt(id);

    const pedido = await PedidoService.getPedido({ id:pedidoId });

    res.json({
        ok:true,
        pedido,
    });
}


const getPedidosPendientes = async (req = request, res = response) =>{
    /**
     *  Por defecto lista todos los pedidos no completados.
     *  / -> {
     *      ...,
     *      complete:false,
     *  }
     * 
     *  El parámetro "cliente" permite listar los pedidos no completados
     *  de un cliente en específico     
     * ?cliente=3 ->  {
     *      ...,
     *      cliente_id:3,
     *      complete:false,
     *  }
     * 
     */
    
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
     *  {
     *      cliente_id:int -> id del cliente
     *      producto_id:int -> id del producto
     *      unidades:int -> numero de unidades del producto
     *      total: int -> precio final de la transaccion
     *  }
     */
    const { cliente_id, producto_id, unidades, total } = req.body;
    const pedidoToCreate = { cliente_id, producto_id, unidades, total }

    const newPedido = await PedidoService.createPedido(pedidoToCreate);
    
    const pedidoPoblado = await PedidoService.getPedido({ id:newPedido.id });
    NotificacionController.notificarNuevoPedido(pedidoPoblado)

    res.json({
        ok:true,
        pedido:newPedido,
    })
}

const completePedido = async (req = request, res = response) => {
    /**
     * id:str -> identificador del pedido
     * Marca el pedido como completado.
     * 
     *  {
     *      ...,
     *      complete:true,
     *  }
     * 
     */
    
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
    getPedido,
    getPedidosPendientes,
    createPedido,
    completePedido,
}