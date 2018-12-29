const http = require('http');

const app = require('./app');

port = process.env.PORT || 8080;

server = http.createServer(app);

server.listen(port);
