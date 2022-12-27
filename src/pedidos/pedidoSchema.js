const { Schema, model } = require('mongoose');

const PedidoSchema = new Schema({
    usuario:{
        nombre:String,
        celular: String,
        correo:String,
    },
    total:Number,
    finalizado:Boolean,
},{ timestamps: true });

PedidoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Pedido', PedidoSchema);