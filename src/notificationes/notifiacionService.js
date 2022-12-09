const MotorizadoService = require('../motorizado/motorizadoService');

const { firebase } = require('./firebase');

const sendNotification = async ( notification = {}, users = [], data = {}) => {

    /**
     * users = [] -> lista con los token de registro de usuarios
     */

    const response = await firebase.post('/fcm/send',{
        "registration_ids":users,
        notification,
        data,
    });

    /**
     * status === 200 -> :D
     * status !== 200 -> :(
     */
    return response.status === 200;
}

const notificarMotorizados = async (title, body, data = {}) => {
    const notification = { title, body };
    const users = await MotorizadoService.getListTokenMotorizados();
    const isCorrect = await sendNotification(notification, users, data);
    
    if(!isCorrect){
        console.error(`${Date.now()}: No se pude enviar la notificación ${notification}.`);
    }  
}

module.exports = {
    notificarMotorizados,
}