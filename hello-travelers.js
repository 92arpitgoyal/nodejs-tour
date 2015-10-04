var http = require('http');

http.createServer(function (request, response) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travelers\n');
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');