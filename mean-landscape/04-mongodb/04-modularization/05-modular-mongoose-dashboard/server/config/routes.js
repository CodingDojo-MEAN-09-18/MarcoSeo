const messageController = require('../controllers/animal');

module.exports = function(app){
    app.get('/', messageController.index);
    app.get('/mongoose/new', messageController.new);
    app.get('/mongoose/:id', messageController.mongoose);
    app.get('/mongoose/edit/:id', messageController.edit);
    app.get('/mongoose/delete/:id', messageController.delete);
    app.post('/create', messageController.create);
    app.post('/mongoose/edited/:id', messageController.edited);
};