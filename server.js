'use strict';

//// Module dependencies.
const app = require('./app');
const http = require('http');
const https = require('https');

//// Get port from environment and store in Express.

const httpPort = parseInt(process.env.PORT, 10) || 80;
const httpsPort = parseInt(process.env.PORT, 10) || 7777;
app.set('port', httpsPort);

//// Create HTTPS server.
const fs = require('fs');

const options = {
  key: fs.readFileSync('cert/key.pem'),
  cert: fs.readFileSync('cert/cert.pem')
};
const httpServer = https.createServer(app);
const httpsServer = https.createServer(options, app);

//// Listen on provided port, on all network interfaces.

// httpServer.listen(httpPort);
// httpServer.on('error', onError);
// httpServer.on('listening', onListening);

httpsServer.listen(httpsPort);
httpsServer.on('error', onError);
httpsServer.on('listening', onListening);
//// Used in logging

const bindName = (typeof httpsPort === 'string')
  ? 'pipe ' + httpsPort
  : 'port ' + httpsPort;

//// Event listener for HTTPS server "error" event.

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

//// Event listener for HTTPS server "listening" event.

function onListening() {
  const addr = httpsServer.address().address;
  console.log('Listening ' + bindName + ' on ' + addr);
}
