const Message = require('mongoose').model('Message');
const Comment = require('mongoose').model('Comment');

module.exports = {
    index(request, response){
        Message.find({})
            .then(message => response.render('index', { message }))
    },
    create(request, response){
        var message = new Message({message: request.body.message, name: request.body.name});
        message.save(function(err){
            if(err){
                console.log(message.errors);
                response.render('messages/create', {errors: message.errors});
            }else{
                response.redirect('/');
            }
    });
    },
    show(request, response){
        Message.findOne({_id: request.params.id})
        .populate('comments')
        .then(message => {response.render('message/messages', { message })})
        .catch(console.log);
    },
    message(request, response){
        response.render('message/create')
    },
    comment(request, response){
        Comment.create(request.body)
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
    }

};