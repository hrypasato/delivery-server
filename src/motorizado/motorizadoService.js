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

const createMotorizado = async ( args ) => {
    const newMotorizado = await Motorizado.createMotorizado({ ...args });
    return newMotorizado
}

const updateMotorizado = async ( motorizadoId, args ) => {
    const where = { id:motorizadoId };
    const motorizadoUpdated = await Motorizado.updateMotorizado(where, { ...args });
    return motorizadoUpdated;
}

module.exports = {
    createMotorizado,
    getMotorizado,
    updateMotorizado,
}