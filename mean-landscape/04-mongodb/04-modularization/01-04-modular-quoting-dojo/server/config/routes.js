const messageController = require('../controllers/message');

module.exports = function(app){
    app.get('/', messageController.index);
    app.post('/create', messageController.create);
    app.get('/messages/create', messageController.message);
    app.get('/messages/:id', messageController.show);
    app.post('/messages/:id', messageController.comment);
};