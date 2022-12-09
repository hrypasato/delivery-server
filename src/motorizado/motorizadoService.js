const Motorizado = require('./motorizado');
/**
 * TODO:
 *  - Si los valores son nulos, throw error
 * 
 */

const getMotorizado = async (filterparams) => {
    const motorizado = await Motorizado.findMotorizado(filterparams);
    return motorizado
}

const getListMotorizados = async (filterparams)=>{
    const motorizados = await Motorizado.findMotorizados(filterparams);
    return motorizados;
}

const createMotorizado = async ( args ) => {
    const newMotorizado = await Motorizado.createMotorizado({ ...args });
    return newMotorizado
}

const updateMotorizado = async ( motorizadoId, args ) => {
    const where = { id:motorizadoId };
    const motorizadoUpdated = await Motorizado.updateMotorizado(where, { ...args });
    return motorizadoUpdated;
}

const getListTokenMotorizados = async () => {
    const listaMotorizados = await getListMotorizados();
    const listaTokens = listaMotorizados.map( motorizado => motorizado.token);
    return listaTokens;
}

module.exports = {
    createMotorizado,
    getMotorizado,
    getListMotorizados,
    getListTokenMotorizados,
    updateMotorizado,
}