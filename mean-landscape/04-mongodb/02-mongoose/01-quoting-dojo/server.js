const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const port = process.env.PORT || 8000;
app.set('port', port);
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/quoting_dojo', {
    useNewUrlParser: true
});
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

const User = new Schema({
    name: {
        type: String,
        required: true,
        min: 0
    },
    quote: {
        type: String,
        required: true,
        min: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Userquote = mongoose.model('User', User);


app.get('/', function(request, response){
    
    response.render('index');
});

app.get('/result', function(request, response){
    Userquote.find({})
        .then(userquotes => response.render('result', { userquotes }))
    
});

app.post('/', function(request, response){
    var quotes = new Userquote({name: request.body.name, quote: request.body.quote});
    quotes.save(function(err){
        if(err){
            console.log(quotes.errors);
            response.render('index', {errors: quotes.errors});
        }else{
            response.redirect('/result');
        }
    });
    
});



app.listen(port, ()=> console.log(`Express server listening on port ${port}`));