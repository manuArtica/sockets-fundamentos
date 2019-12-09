var socket = io();

/**
 * Definiremos varias funciones relacionadas con el socket.io
 * La primera nos mostrará un mensaje que nos diga cuando tenemos
 * una conexion entre el servidor y el cliente
 */

/**
 * Las funciones .on sirven para escuchar información
 */

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

/**
 * Detectando cuando se pierde la conexion con el servidor
 */

socket.on('disconnect', function() {
    console.log('Perdida conexión con el servidor');
});

/**
 * Las funciones .emit sirven para enviar informacion
 */

/**
 * Confirmamos que la información fue recibida correctamente
 * añadiendo un tercer argumento al .emit, que en este caso
 * será una función
 */

socket.emit('enviarMensaje', {
    usuario: 'Manuel',
    mensaje: 'Hello World'
}, function(resp) {
    console.log('Respuesta del server:', resp);
});



/**
 * Escuchamos la información que nos envía el servidor
 */

socket.on('enviarMensaje', function(mensaje) {
    console.log('Información recibida desde el servidor:', mensaje);
})