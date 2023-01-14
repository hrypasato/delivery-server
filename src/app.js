const express = require("express"); 
const cors = require('cors');
const dotenv = require('dotenv')

const { rutas } = require('./router');


dotenv.config()

const app = express();  


app.use(cors());
app.use(express.json());

rutas.forEach( ruta => {
    app.use(ruta.path, ruta.router);
})



module.exports = app;