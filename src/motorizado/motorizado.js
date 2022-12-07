const database = require('../database');

const findMotorizado = async ( filterparams ) => {
    const motorizado = await database.motorizados.findUnique({
        where:{
            ...filterparams,
        }
    });

    return motorizado;
}

const createMotorizado = async ( motorizado ) => {
    const newMotorizado = await database.motorizados.create({
        data:{
            ...motorizado,
        }
    });

    return newMotorizado;
}

const updateMotorizado = async ( filterparams, fields ) => {
    const motorizadoUpdated = await database.motorizados.update({
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
    updateMotorizado,
}