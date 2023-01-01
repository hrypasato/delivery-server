const { request, response } = require("express");

const RepartidorService = require('./repartidorService');

const createRepartidor = async ( req= request, res = response ) => {
    /**
     * {
     *      nombre: string -> nombre del motorizado
     *      token: string -> token de identificación para notificaciones
     * }
     */

    const { nombre, token } = req.body;

    const newRepartidor = await RepartidorService.createMotorizado({nombre, token});
    
    res.json({
        ok:true,
        motorizado:newRepartidor,
    })
}

const updateRepartidor = async (req=request, res = response) =>{
    /**
     * id: str -> identificador del motorizado
     * 
     * {
     *      token:str -> nuevo token
     * }
     * 
     */

    const { id } = req.params;
    const motorizadoId = parseInt(id);

    const { token } = req.body;
    const data = { token }

    const motorizadoUpdated = await RepartidorService.updateMotorizado(motorizadoId, { ...data });
    res.json({
        ok:true,
        motorizado:motorizadoUpdated,
    })
}

module.exports = {
    createRepartidor,
    updateRepartidor,
}