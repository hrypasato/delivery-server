const NotificacionService = require('./notifiacionService');

const notificarNuevoPedido = async ( nuevoPedido ) => {
    const { clientes } = nuevoPedido;
    
    const title = 'Nuevo pedido';
    
    const body = clientes.nombre;

    const data = {
        ...nuevoPedido,
    };

    await NotificacionService.notificarMotorizados(title, body, data);

}

module.exports = {
    notificarNuevoPedido,
}