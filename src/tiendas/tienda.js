const { postgres } = require('../database');

const getAllTiendas = async () => {
    const tiendas = await postgres.tiendas.findMany();
    return tiendas;
}

module.exports = {
    getAllTiendas,
}