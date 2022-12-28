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
     *      cliente:string  -> id del cliente
     *      comision:number -> id del producto
     *      total:number    -> numero de unidades del producto
     *      //ubicacion:string -> id de la ubicación del usuario
     *      productos:[     -> lista con los ids de los productos y su cantidad
     *      {
     *          id:string -> id del producto solicitado 1
     *          cantidad:int        -> numero de unidaddes
     *      },
     *      {
     *          id:string -> id del producto solicitado 2
     *          cantidad:int        -> numero de unidaddes
     *      }
     *      ...
     *      ]
     *  }
     */
    const data = req.body;

    const newPedido = await PedidoService.createPedido({ ...data });
    
    //const pedidoPoblado = await PedidoService.getPedido({ id:newPedido.id });
    //NotificacionController.notificarNuevoPedido(pedidoPoblado)

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