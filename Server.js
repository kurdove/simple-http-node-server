var http = require('http');
var fs = require('fs');

fs.writeFileSync('hello-world.txt', 'Hello to this great world');
console.log('file hello-world.txt created')
var readMe = fs.readFileSync('hello-world.txt', 'utf8');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(readMe);
});

server.listen(3000);
console.log('port 3000 now listening');