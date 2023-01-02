const { request, response } = require("express")

const PedidoService = require('./pedidoService');


const getAllPedidos = async (req = request, res = response) => {
    const pedidos = await PedidoService.getPedidos({});
    res.json({
        ok:true,
        pedidos,
    });
}

const getPedidoById = async (req = request, res = response) => {
    const { id } = req.params;

    const pedido = await PedidoService.getPedido({ id });

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
     * ?cliente=some-string-id ->  {
     *      ...,
     *      cliente:some-string-id,
     *      complete:false,
     *  }
     * 
     */
    
    const { cliente } = req.query;
    
    const where = { finalizado:false };


    if(!!cliente){
        where['cliente'] = cliente;
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

    res.json({
        ok:true,
        pedido:newPedido,
    })
}

const updatePedido = async (req = request, res = response) => {
    /**
     * id:str -> identificador del pedido
     * body:
     * {
     *  repartidor: string -> id del repartidor asignado
     * }
     */

    const { id } = req.params;
    const { repartidor } = req.body;
    const data = { repartidor };
    
    const pedidoUpdated = await PedidoService.updatePedido(id, { ...data });
    
    res.json({
        ok:true,
        pedido:pedidoUpdated,
    });

}

const completePedido = async (req = request, res = response) => {
    /**
     * id:str -> identificador del pedido
     * Marca el pedido como completado.
     * 
     *  {
     *      ...,
     *      finalizado:true,
     *  }
     * 
     */
    
    const { id } = req.params;
    
    const data = { finalizado:true };
    const pedidoUpdated = await PedidoService.updatePedido(id, { ...data });
    
    res.json({
        ok:true,
        pedido:pedidoUpdated,
    });

}

module.exports = {
    getAllPedidos,
    getPedidoById,
    getPedidosPendientes,
    createPedido,
    updatePedido,
    completePedido,
}