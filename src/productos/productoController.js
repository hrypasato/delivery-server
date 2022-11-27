const { request, response } = require('express');
const ProductoService = require('./productoService');

const getAllProductos = async (req, res) => {
    const productos = await ProductoService.getAllProductos();
    res.json({
        ok:true,
        productos,
    });
}

const getProductoById = async (req = request, res = response) => {
    const { id } = req.params;
    const productoId = parseInt(id);

    const producto = await ProductoService.getProductoBy({ id:productoId });
    
    res.json({
        ok:true,
        producto,
    })
}

module.exports = {
    getAllProductos,
    getProductoById,
}