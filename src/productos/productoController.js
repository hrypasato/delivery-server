const { request, response } = require('express');
const ProductoService = require('./productoService');

const getAllProductos = async (req, res) => {
    const productos = await ProductoService.getAllProductosBy({});
    res.json({
        ok:true,
        productos,
    });
}

const getProductoById = async (req = request, res = response) => {
    const { id } = req.params;

    const producto = await ProductoService.getProductoBy({ id });
    
    res.json({
        ok:true,
        producto,
    })
}

const getProductosByTienda = async(req = request, res = response) => {
    const { tienda } = req.params;
    const productos = await ProductoService.getAllProductosBy({ tienda });
    res.json({
        ok:true,
        productos
    })
}

module.exports = {
    getAllProductos,
    getProductoById,
    getProductosByTienda,
}