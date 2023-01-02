const { Schema, model } = require('mongoose');

const DireccionSchema = new Schema({
    principal: String,  //Calle principal
    secundaria: String, //Calle secundaria
    numero: String,     //Numero de casa
    referencia: String, //Referencia de casa (Ej. Frente al mercado municipal)
    sector:Number,      //Id del sector de la casa (funcionará como referencia del precio de transporte)
})

DireccionSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Direccion', DireccionSchema);