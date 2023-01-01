const Repartidor = require('./repartidor');
/**
 * TODO:
 *  - Si los valores son nulos, throw error
 * 
 */

const getRepartidor = async (filterparams) => {
    const repartidor = await Repartidor.findMotorizado(filterparams);
    return repartidor
}

const getRepartidores = async (filterparams)=>{
    const repartidores = await Repartidor.findRepartidores(filterparams);
    return repartidores;
}

const createRepartidor = async ( args ) => {
    const newRepartidor = await Repartidor.createMotorizado({ ...args });
    return newRepartidor
}

const updateRepartidor = async ( motorizadoId, args ) => {
    const where = { id:motorizadoId };
    const motorizadoUpdated = await Repartidor.updateMotorizado(where, { ...args });
    return motorizadoUpdated;
}

const getListTokenRepartidores = async () => {
    const listaMotorizados = await getListRepartidores();
    const listaTokens = listaMotorizados.map( motorizado => motorizado.token);
    return listaTokens;
}

module.exports = {
    createRepartidor,
    getRepartidor,
    getRepartidores,
    getListTokenRepartidores,
    updateRepartidor,
}