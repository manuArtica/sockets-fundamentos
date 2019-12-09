const { io } = require('../server');

/**
 * Desde el server también obtenemos información sobre la conexion
 */

io.on('connection', (client) => {

    console.log('Usuario conectado');

    /**
     * Una vez un usuario se ha conectado podemos emitir un mensaje para que el cliente lo escuche
     */

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    /**
     * Controlamos cuando se desconecta el usuario desde el server
     */

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    /**
     * Escuchamos el evento que envía el .emit desde el cliente
     * Para confirmar que el mensaje se envió correctamente utilizamos
     * el callback
     */

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        /**
         * Utilizamos la propiedad broadcast para que todos los clientes reciban el mensaje
         */

        client.broadcast.emit('enviarMensaje', data);

        /*  if (mensaje.usuario) {
              callback({
                  resp: 'TODO OK!!'
              });
          } else {
              callback({
                  resp: 'CACA!!!'
              });
          }*/

    });


});