var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
  console.log('client request URL: ', request.url);
  if(request.url === '/') {
    fs.readFile('views/index.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === "/cars") {
    fs.readFile('views/cars.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === "/cats") {
    fs.readFile('views/cats.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === "/cars/new") {
    fs.readFile('views/new.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url ==="/css/cars.css") {
    fs.readFile('css/cars.css', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === "/img/f-type-01.jpg") {
    fs.readFile('img/f-type-01.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'})
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === "/img/f-type-02.jpg") {
    fs.readFile('img/f-type-02.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'})
      response.write(contents);
      response.end();
    })
  }
  else if(request.url ==="/css/cats.css") {
    fs.readFile('css/cats.css', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === "/img/cat-01.jpg") {
    fs.readFile('img/cat-01.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'})
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === "/img/cat-02.jpg") {
    fs.readFile('img/cat-02.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'})
      response.write(contents);
      response.end();
    })
  }
  else{
    response.end("File not found...")
  }
})
server.listen(7077);
console.log("Running in localhose at port 7077");