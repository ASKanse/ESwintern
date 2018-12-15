const http = require('http');

const app1 = require('./app1');

port = process.env.PORT || 3000;

server = http.createServer(app1);

server.listen(port);
