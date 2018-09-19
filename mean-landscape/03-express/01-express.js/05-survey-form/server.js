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
app.get('/clear', function(request, response){

    response.redirect('/')
})

app.post('/result', function (request, response) {
    name = request.body.name;
    location = request.body.location;
    language = request.body.language;
    comment = request.body.comment;
    console.log(name, location, language, comment);
    response.render('result');
});





app.listen(port, ()=> console.log(`Express server listening on port ${port}`));