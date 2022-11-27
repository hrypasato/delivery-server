const database = require('../database');

const getAllProductos = async () => {
    const productos = await database.productos.findMany();
    return productos;
}

const getProducto = async ( args ) => {
    const producto = await database.productos.findUnique({
        where:{
            ...args,
        }
    });
    return producto;
}

module.exports = {
    getAllProductos,
    getProducto,
}