// get the http module:
const http = require('http');
// fs module allows us to read and write content for responses!!
const fs = require('fs');
// creating a server using http module:
const static_contents = require('./lib/static.js');

server = http.createServer(function (request, response){
    
    if (request.url === '/') {
        fileApi.index(function(content) {
        response.writeHead(200, {
        'Content-Type': 'text/html'
        });
        response.write(content);
        response.end();
        })
        } 
    
});
// tell your server which port to run on
server.listen(8000);
module.exports = server;
// print to terminal window
console.log("Running in localhost at port 8000");
