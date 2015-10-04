var http = require('http');
var fileSystem = require('fs');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var bookReaing = fileSystem.createReadStream('someHoarding.txt');
    reaing.on('data', writeCallback);
    reaing.on('close', closeCallback);
    function writeCallback(data){
        response.write(data);
    }
    function closeCallback(){
        response.end();
    }
}).listen(8080);

console.log('Server started');