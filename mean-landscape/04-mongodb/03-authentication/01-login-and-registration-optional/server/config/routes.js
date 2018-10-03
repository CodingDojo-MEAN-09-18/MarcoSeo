const userController = require('../controllers/register');


module.exports = function(app){
    app.get('/', userController.index);
    app.post('/signup', userController.signup);
    app.post('/login', userController.login);
    app.get('/welcome', userController.welcome);
    app.get('/logout', userController.logout);
};