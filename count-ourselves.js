var http = require('http');

var travelersCount = 0;
http.createServer(function (request, response) {
    console.log('New Travelers');
    travelersCount++;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.write('We have '+travelersCount+' Travelers(s)!\n');
    response.end();
}).listen(8080);

console.log('Journey started');