'use strict';

//// Module dependencies.
const app = require('./app');
const http = require('http');

//// Get port from environment and store in Express.

const port = parseInt(process.env.PORT, 10) || 80;
app.set('port', port);

//// Create HTTP server.

const server = http.createServer(app);

//// Listen on provided port, on all network interfaces.

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
//// Used in logging

const bindName = (typeof port === 'string')
  ? 'pipe ' + port
  : 'port ' + port;

//// Event listener for HTTP server "error" event.

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bindName + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bindName + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

//// Event listener for HTTP server "listening" event.

function onListening() {
  const addr = server.address().address;
  console.log('Listening ' + bindName + ' on ' + addr);
}
