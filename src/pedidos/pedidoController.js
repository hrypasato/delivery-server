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
    const { body } = req.body;
    const pedidoToCreate = { ...body }

    const newPedido = await PedidoService.createPedido(pedidoToCreate);
    
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
    getPedidosPendientes,
    createPedido,
    completePedido,
}