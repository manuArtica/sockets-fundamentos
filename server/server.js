const express = require('express');

/**
 * Cargamos el parquete socket.io
 * socket.io no trabaja directamente con la aplicación de express pero si
 * trabaja con un servidor http que trae por defecto node, con lo cual tenemos
 * que cargar también el paquete http
 */

const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

/**
 * Definimos el servidor para correr la aplicación
 */



const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

/**
 * Inicializamos el socket.io que mantendrá una conexión directa con el servidor
 */

module.exports.io = socketIO(server);
require('./sockets/socket');





server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});