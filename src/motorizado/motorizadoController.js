const { request, response } = require("express");

const MotorizadoService = require('./motorizadoService');

const createMotorizado = async ( req= request, res = response ) => {
    /**
     * {
     *      nombre: string -> nombre del motorizado
     *      token: string -> token de identificación para notificaciones
     * }
     */

    const { nombre, token } = req.body;

    const newMotorizado = await MotorizadoService.createMotorizado({nombre, token});
    
    res.json({
        ok:true,
        motorizado:newMotorizado,
    })
}

const updateTokenMotorizado = async (req=request, res = response) =>{
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

    const motorizadoUpdated = await MotorizadoService.updateMotorizado(motorizadoId, { ...data });
    res.json({
        ok:true,
        motorizado:motorizadoUpdated,
    })
}

module.exports = {
    createMotorizado,
    updateTokenMotorizado,
}