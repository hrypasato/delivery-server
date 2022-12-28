const Tienda = require('./tienda');

const getAllTiendas = async (filterparams) => {
    const tiendas = await Tienda.getAllTiendas();
    return tiendas;
}

module.exports = {
    getAllTiendas,
}