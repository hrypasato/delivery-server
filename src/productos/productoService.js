const Producto = require('./producto');

const getAllProductosBy = async ( args ) => {
    const productos = await Producto.getProductosBy( args );
    return productos;
}

const getProductoBy = async ( args ) => {
    const producto = await Producto.getProducto( args );
    return producto;
}

module.exports = {
    getAllProductosBy,
    getProductoBy,
}