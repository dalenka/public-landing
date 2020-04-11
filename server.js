'use strict';

//// Module dependencies.
const app = require('./app');
const http = require('http');
const https = require('https');

//// Get port from environment and store in Express.

const httpPort = parseInt(process.env.PORT, 10) || 87;
const httpsPort = parseInt(process.env.PORT, 10) || 8777;
app.set('port', httpsPort);

//// Create HTTP/HTTPS server.
const fs = require('fs');

const options = {
  key: fs.readFileSync('cert/key.pem'),
  cert: fs.readFileSync('cert/cert.pem')
};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);

//// Listen on provided port, on all network interfaces.

httpServer.listen(httpPort);
httpServer.on('error', (error) => { onError(httpServer, httpPort, error); });
httpServer.on('listening', () => { onListening(httpServer, httpPort); });

httpsServer.listen(httpsPort);
httpsServer.on('error', (error) => { onError(httpsServer, httpsPort, error); });
httpsServer.on('listening', () => { onListening(httpsServer, httpsPort); });

//// Used in logging
function portToBindName(port) {
  const bindName = (typeof port === 'string')
  ? 'pipe ' + port
  : 'port ' + port;
  return bindName;
}


//// Event listener for HTTP/HTTPS server "error" event.
function onError(server, port, error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  const bindName = portToBindName(port);
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

//// Event listener for HTTP/HTTPS server "listening" event.

function onListening(server, port) {
  const addr = server.address().address;
  const bindName = portToBindName(port);
  console.log('Listening ' + bindName + ' on ' + addr);
}
