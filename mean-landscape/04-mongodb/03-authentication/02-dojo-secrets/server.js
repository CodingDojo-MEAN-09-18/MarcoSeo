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
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});
User.pre('save', function(done){
    var hashedpw = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    this.password = hashedpw;
    this.password_confirm = undefined;
    done();
;})


const Message = new Schema({
    name: {
        type: String,
        required: true,
        min: 0
    },
    message: {
        type: String,
        required: true,
        min: 0
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    users: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Comment = new Schema({
    name: {
        type: String,
        required: true,
        min: 0
    },
    comment: {
        type: String,
        required: true,
        min: 0
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    messages: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    },
    users: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

});

const userLogin = mongoose.model('User', User);
const Msg = mongoose.model('Message', Message);
const Cmt = mongoose.model('Comment', Comment);

// main homepage
app.get('/', function(request, response){
    // response.render('index', { message })
    if(request.session.user_id){
        response.redirect('/login/message');
    }else{
        response.render('index', {errors: ''});
    }
});

// user register
app.post('/register', function(request, response){
    var users = new userLogin(request.body);
    users.save(function(err){
        if(err){
            console.log(err);
            response.render('index', {errors: err});
        }else{
            request.session.user_id = users.id;
            request.session.name = users.first_name+ " " + users.last_name;
            response.redirect('/login/message');
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
        response.redirect('/login/message');
        
    });
    
});



// after login or register, shows message board
app.get('/login/message/', function(request, response){
    if(!request.session.user_id) {
        response.redirect('/');
    }
    else{
        Msg.find({})
        .populate('users')
        .then(message => response.render('message/index', {id: request.session.user_id, name: request.session.name, message}));
            
        
    }
    
});

app.post('/create/:id', function(request, response){
    Msg.create(request.body)
    .then(messages => {
        console.log(messages);

        return Msg.findOneAndUpdate({_id: messages._id}, {$push: {users: request.params.id}}, {upsert: true})
        .then(() => {
            console.log(messages);
            response.redirect('/login/message/');
        });
    });
});

app.get('/messages/create/:id', function(request, response){
    if(!request.session.user_id) {
        response.redirect('/');
    }
    else{
        response.render('message/create', {id: request.session.user_id, name: request.session.name})
    }
});
app.get('/messages/:id', function(request, response){
    if(!request.session.user_id) {
        response.redirect('/');
    }
    else{
        Msg.findOne({_id: request.params.id})
        .populate('comments')
        .then(message => {response.render('message/messages', { message, id: request.session.user_id, name: request.session.name })})
        .catch(console.log);
    }
    

});

app.post('/messages/:id', function(request, response){
    
    Cmt.create(request.body)
    .then(msgcomment => {
      console.log(msgcomment);

    //   메세지 테이블에서 message id 찾고 그안에 comments에 코멘트 테이블을 집어넣는 방법
    // upsert is for 많이 적을때
      return Msg.findOneAndUpdate({_id: request.params.id}, {$push: {comments: msgcomment._id}}, {upsert: true} )
        .then(() => {
            return Cmt.findOneAndUpdate({_id: msgcomment._id}, {$push: {users: request.body.user_id} }, {upsert: true})
        })
            .then(()=>{
                return userLogin.findOneAndUpdate({_id: request.body.user_id}, {$push: {comments: msgcomment._id}}, {upsert: true})
            })
                .then(() => {
                    response.redirect(`/messages/${request.params.id}`);
                })

    })
});

app.get('/delete/:id', function(request, response){
    Msg.findById({_id: request.params.id})
    Msg.deleteOne({_id: request.params.id})
    // .populate('users')
    .then(del_msg => {
        console.log(del_msg._id);
        return Msg.remove({_id: request.params.id})
            .then(() => {
                console.log('deleted');
                response.redirect('/login/message')

            })
            // .then((user_msg)=>{
            //     console.log(del_msg.users._id);
            //     console.log(user_msg._id);
            //     if(del_msg.users._id === user_msg._id){   
            //         return Msg.deleteOne({_id: request.params.id})
            //     }else{
            //         console.log('can not delete');
            //     }
            // });

    });
});
app.get('/logout', function(request, response){
    request.session.destroy();
    response.redirect('/')
})

app.listen(port, ()=> console.log(`Express server listening on port ${port}`));
