const { postgres } = require('../database');

const findRepartidores = async ( filterparams ) => {
    const repartidores = await postgres.motorizados.findMany({
        where:{
            ...filterparams,
        }
    });

    return repartidores;
}

const findRepartidor = async ( filterparams ) => {
    const repartidor = await postgres.motorizados.findUnique({
        where:{
            ...filterparams,
        }
    });

    return repartidor;
}

const createRepartidor = async ( motorizado ) => {
    const newRepartidor = await postgres.motorizados.create({
        data:{
            ...motorizado,
        }
    });

    return newRepartidor;
}

const updateRepartidor = async ( filterparams, fields ) => {
    const repartidorUpdated = await postgres.motorizados.update({
        where:{
            ...filterparams,
        },
        data:{
            ...fields,
        }
    });

    return repartidorUpdated;
}


module.exports = {
    createRepartidor,
    findRepartidor,
    findRepartidores,
    updateRepartidor,
}