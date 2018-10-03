const User = require('mongoose').model('User');

module.exports = {
    index(request, response){

        response.render('index')

    },
};