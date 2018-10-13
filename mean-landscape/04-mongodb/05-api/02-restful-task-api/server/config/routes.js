const messageController = require('../controllers/animal');

module.exports = function (app) {
  app.get('/', messageController.index);
  app.get('/api/mongoose', messageController.show);
  app.get('/api/mongoose/:id', messageController.mongoose);
  app.get('/mongoose/edit/:id', messageController.edit);
  app.get('/mongoose/delete/:id', messageController.delete);
  app.post('/create', messageController.create);
  app.post('/mongoose/edited/:id', messageController.edited);
};
