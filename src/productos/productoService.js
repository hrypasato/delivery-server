const Producto = require('./producto');

const getAllProductos = async (filterparams) => {
    const productos = await Producto.getAllProductos();
    return productos;
}

const getAllProductosBy = async ( args ) => {
    const productos = await Producto.getProductosBy( args );
    return productos;
}

const getProductoBy = async ( args ) => {
    const producto = await Producto.getProducto( args );
    return producto;
}

module.exports = {
    getAllProductos,
    getAllProductosBy,
    getProductoBy,
}