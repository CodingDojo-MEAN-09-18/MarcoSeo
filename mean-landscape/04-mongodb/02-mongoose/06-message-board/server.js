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

mongoose.connect('mongodb://localhost:27017/message_board', {
    useNewUrlParser: true
});
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

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
    }]
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
    }

});

const Msg = mongoose.model('Message', Message);
const Cmt = mongoose.model('Comment', Comment);




app.get('/', function(request, response){
    Msg.find({})
        .then(message => response.render('index', { message }))
    
});
app.post('/create', function(request, response){
    var message = new Msg({message: request.body.message, name: request.body.name});
    message.save(function(err){
        if(err){
            console.log(message.errors);
            response.render('messages/create', {errors: message.errors});
        }else{
            response.redirect('/');
        }
    });
});
app.get('/messages/create', function(request, response){

    response.render('message/create')
});
app.get('/messages/:id', function(request, response){
    Msg.findOne({_id: request.params.id})
    .populate('comments')
    .then(message => {response.render('message/messages', { message })})
    .catch(console.log);

});

    // Msg.findOne({_id: request.params.id})
    //     .then(message => response.render('message/messages', { message }))
        // .catch(console.log(Msg));
        
// app.get('/messages/:id/comment', function(request, response){
//     Msg.find({}).populate('comments')
//         .then(comment => response.render('message/messages', { comment }))

// })
// app.post('/messages/:id', function(request, response){

//     var comment = new Cmt({comment: request.body.comment, name: request.body.name, messages: request.params.id});
//     comment.save(function(err){
//         if(err){
//             response.render('message/messages');
//         }else{
//             console.log(comment);
//             response.redirect(`/messages/${request.params.id}/comment`);
//         }
//     });
// });
app.post('/messages/:id', function(request, response){
    Cmt.create(request.body)
    .then(msgcomment => {
      console.log(msgcomment);

      return Comment.findById(msgcomment.messages)
        
        .then(message => {
          message.comments.push(msgcomment._id)

          return message.save();
        })
        .then(() => {
          response.redirect(`/messages/${request.params.id}`);
      })

    })
    // .catch(error => {
    //   const errors = Object.keys(error.errors).map(key => error.errors[key].message);

    //   response.render('message/messages', { errors });
    // });
});


app.listen(port, ()=> console.log(`Express server listening on port ${port}`));