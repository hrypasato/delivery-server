const { postgres } = require('../database');

const findMotorizados = async ( filterparams ) => {
    const motorizados = await postgres.motorizados.findMany({
        where:{
            ...filterparams,
        }
    });

    return motorizados;
}

const findMotorizado = async ( filterparams ) => {
    const motorizado = await postgres.motorizados.findUnique({
        where:{
            ...filterparams,
        }
    });

    return motorizado;
}

const createMotorizado = async ( motorizado ) => {
    const newMotorizado = await postgres.motorizados.create({
        data:{
            ...motorizado,
        }
    });

    return newMotorizado;
}

const updateMotorizado = async ( filterparams, fields ) => {
    const motorizadoUpdated = await postgres.motorizados.update({
        where:{
            ...filterparams,
        },
        data:{
            ...fields,
        }
    });

    return motorizadoUpdated;
}


module.exports = {
    createMotorizado,
    findMotorizado,
    findMotorizados,
    updateMotorizado,
}