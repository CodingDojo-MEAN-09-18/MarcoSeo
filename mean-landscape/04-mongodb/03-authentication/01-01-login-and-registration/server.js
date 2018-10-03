const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const { Schema } = mongoose;
const session = require('express-session');
const bcrypt = require('bcrypt');


app.use(session({secret: 'marcokey'}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.set('port', port);


mongoose.connect('mongodb://localhost:27017/secrets', {
    useNewUrlParser: true
});
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

const User = new Schema({
    // make models
    first_name: {
        type: String,
        required: [true, 'Please enter your first name']
    },
    last_name: {
        type: String,
        required: [true, "Please enter your last name"]

    },
    email: {
        type: String,
        required: [true, 'Please enter your e-mail'],
        unique: [true, 'e-mail already exists, Please log in']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [8, 'Password must be at least 8 characters'],
        validate: {
            validator: function( value ) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{2,32}/.test( value );
                },
                message: "Password failed validation, you must have at least 1 number, uppercase and special character" 
        }
    },
    confirm_password: {
        type: String,
        required: [true, "Please enter your confirm password"],
        validate: {
            validator: function(value){
                return value == this.password;
            }, message:"Passwords must match."
        }
    },
    birthday: {
        type: Date,
        required: [true, "Please enter your birthday"]
    }
});
User.pre('save', function(done){
    var hashedpw = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    this.password = hashedpw;
    this.password_confirm = undefined;
    done();
;})

const userLogin = mongoose.model('User', User);


app.get('/', function(request, response){
    
    response.render('index', {errors: ''});
});

app.get('/result', function(request, response){
    if(!request.session.user_id) {
        response.redirect('/');
    }
    else{
        response.render('result', {id: request.session.user_id, name: request.session.name});
    }

    
});

app.get('/logout', function(request, response){
    request.session.destroy();
        response.redirect('/');
});

app.post('/register', function(request, response){
    var users = new userLogin(request.body);
    users.save(function(err){
        if(err){
            console.log(err);
            response.render('index', {errors: err});
        }else{
            request.session.user_id = users.id;
            request.session.name = users.first_name+ " " + users.last_name;
            response.redirect('/result');
        }
    });
    
});

app.post('/login', function(request, response){
    userLogin.findOne({email: request.body.email}, function(err, login) {
        if(err){
            console.log(err);
            response.render('index', {errors: err});
        }
        console.log(login)
        console.log('login successful');
        request.session.user_id = login.id;
        request.session.name = login.first_name+ " "+login.last_name;
        response.redirect('/result');
        
    });
    
});



app.listen(port, ()=> console.log(`Express server listening on port ${port}`));