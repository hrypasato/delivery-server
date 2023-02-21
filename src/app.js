const express = require("express"); 
const cors = require('cors');
const dotenv = require('dotenv');

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

dotenv.config()


const { rutas } = require('./router');

const app = express();  

app.use(cors());
app.use(express.json());

rutas.forEach( ruta => {
    app.use(ruta.path, ruta.router);
})

app.use('/docs',swaggerUI.serve ,swaggerUI.setup(swaggerDocument));


module.exports = app;