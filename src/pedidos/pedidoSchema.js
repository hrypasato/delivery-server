const { Schema, model } = require('mongoose');

const PedidoSchema = new Schema({
    cliente:String,     //id de usuario cliente
    repartidor:String,  //id de usuario repartidor
    comision:Number,    //valor del transporte
    total:Number,       //valor total del servicio
    /**
     * TODO:
     * - Esquema de ubucacion
     * - Campo ubicación en el pedido
     * - Retornar pedido poblado con informacion de ubicacion
     */
    //ubicacion:{}
    finalizado:{
        type:Boolean,
        default:false,
    }, //estado de la transaccion
    productos:[{
        nombre:String,  //nombre del producto
        precio:Number,  //precio de venta del producto cuando se creó el pedido
        cantidad:Number,//numero de unidades solicitadas
        tienda:String,  //nombre de la tienda
    }]
    }, 
    { 
        timestamps: true //createdAt & updatedAt
    }
);

PedidoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Pedido', PedidoSchema);