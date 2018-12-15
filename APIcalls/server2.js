const http = require('http');

const app2 = require('./app2');

port = process.env.PORT || 8000;

server = http.createServer(app2);

server.listen(port);
