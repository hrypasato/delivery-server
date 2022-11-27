const Producto = require('./producto');

const getAllProductos = async (filterparams) => {
    const productos = await Producto.getAllProductos();
    return productos;
}

const getProductoBy = async ( args ) => {
    const producto = await Producto.getProducto( args );
    return producto;
}

module.exports = {
    getAllProductos,
    getProductoBy,
}