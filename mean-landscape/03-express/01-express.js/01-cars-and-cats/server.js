const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('port', port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));


app.get('/', function (request, response) {

    response.render('index');
});


app.get('/cars', function(request, response) {

    response.render('cars');
})

app.get('/cars/new', function(request, response){
    
    response.render('carsnew');
})

app.get('/cats', function(request, response){
    
    response.render('cats');
})

console.log("welcome");


app.listen(port, ()=> console.log(`Express server listening on port ${port}`));