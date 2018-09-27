const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const port = process.env.PORT || 8000;
app.set('port', port);
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/mongoose_dashboard', {
    useNewUrlParser: true
});
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

// DATABASE
const Animal = new Schema({
    name: {
        type: String,
        required: true,
        min: 0
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    nickname: {
        type: String,
        required: false
    }
});
const Pet = mongoose.model('Animal', Animal);

app.get('/', function(request, response){
    Pet.find({})
        .then(pets => response.render('index', { pets }))
    // response.render('index');
});
app.get('/mongoose/new', function(request, response){

    response.render('mongoose/new');
});
app.post('/', function(request, response){
    var mongoo = new Pet({name: request.body.name, sex: request.body.sex, age: request.body.age, nickname: request.body.nickname});
    mongoo.save(function(err){
        if(err){
            console.log(mongoo.errors);
            response.render('mongoose/new', {errors: mongoo.errors});

        }else{
            response.redirect('/');
        }
    });


});
app.get('/moongoose/:id', function(request, response){
    Pet.findOne({_id: request.params.id})
        .then(pets => response.render('mongoose/mongoose', { pets: pets }))
});
app.get('/mongoose/edit/:id', function(request, response){
    Pet.findOne({_id: request.params.id})
        .then(pets => response.render('mongoose/edit', { pets: pets }))
})
app.post('/mongoose/edited/:id', function(request, response){
    console.log(request.body);
    Pet.update({_id: request.params.id}, {name: request.body.name, sex: request.body.sex, age: request.body.age, nickname: request.body.nickname}, function(err){
        if(err){
            response.redirect(`/mongoose/edit/${request.params.id}`);
        }else{
            response.redirect('/');
        }
    });
    
});

app.get('/mongoose/delete/:id', function(request, response){
    Pet.remove({_id: request.params.id})
        .then(response.redirect('/'))
});

app.listen(port, ()=> console.log(`Express server listening on por ${port}`));