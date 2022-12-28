const { request, response } = require('express');
const TiendaService = require('./tiendaService');

const getAllTiendas = async (req =request, res = response) => {
    const tiendas = await TiendaService.getAllTiendas();
    res.json({
        ok:true,
        tiendas,
    })
}

module.exports = {
    getAllTiendas,
}