const { postgres } = require('../database');

const getAllProductos = async () => {
    const productos = await postgres.productos.findMany();
    return productos;
}

const getProductosBy = async (args) => {
    const productos = await postgres.productos.findMany({
        where:{
            ...args
        }
    })
    return productos;
}

const getProducto = async ( args ) => {
    const producto = await postgres.productos.findUnique({
        where:{
            ...args,
        }
    });
    return producto;
}

module.exports = {
    getAllProductos,
    getProductosBy,
    getProducto,
}