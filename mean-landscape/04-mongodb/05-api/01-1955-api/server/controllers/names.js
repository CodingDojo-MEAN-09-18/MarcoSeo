var mongoose = require('mongoose');
var Name = mongoose.model('Name');

function Names(){
    this.index = function(request, response) {
        Name.find({}, function(err, results){
            response.json(results);
        });
    }
    this.newName = function(request, response) {
        var newName = request.params.name;
        Name.create({name: newName}, function(err) {
            if(err) {
                console.log(newName.errors);
            }
            response.redirect('/');
        });
    }
    this.remove = function(request, response) {
        Name.remove({name: request.params.name}, function(err) {
            if(err) {
                console.log(err);
            }
            response.redirect('/');
        });
    }
    this.name = function(request, response) {
        Name.findOne({name: request.params.name}, function(err, results){
            if(err) {
                console.log(newName.errors);
            }
            response.json(results);
        });
    }
}
module.exports = new Names();