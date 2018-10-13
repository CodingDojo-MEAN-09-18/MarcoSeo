const Pet = require('mongoose').model('Animal');


module.exports = {
    index(request, response){
        Pet.find({})
            .then(pets => response.render('index', { pets }))
    },
    new(request,response){
        response.render('mongoose/new');
    },
    create(request, response){
        var mongoo = new Pet({name: request.body.name, sex: request.body.sex, age: request.body.age, nickname: request.body.nickname});
        mongoo.save(function(err){
            if(err){
                console.log(mongoo.errors);
                response.render('mongoose/new', {errors: mongoo.errors});
    
            }else{
                response.redirect('/');
            }
        })
    },
    mongoose(request, response){
        Pet.findOne({_id: request.params.id})
        .then(pets => response.render('mongoose/mongoose', { pets: pets }))
    },
    edit(request, response){
        Pet.findOne({_id: request.params.id})
        .then(pets => response.render('mongoose/edit', { pets: pets }))
    },
    edited(request, response){
        console.log(request.body);
        Pet.update({_id: request.params.id}, {name: request.body.name, sex: request.body.sex, age: request.body.age, nickname: request.body.nickname}, function(err){
            if(err){
                response.redirect(`/mongoose/edit/${request.params.id}`);
            }else{
                response.redirect('/');
            }
        });
    },
    delete(request, response){
        Pet.remove({_id: request.params.id})
        .then(response.redirect('/'))
    }

};