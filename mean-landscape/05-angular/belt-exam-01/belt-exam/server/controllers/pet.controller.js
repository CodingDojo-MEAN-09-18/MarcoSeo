// using const Book = require('mongoose').model('Book'); instead of using mongoose and book seperate
const Pet = require('mongoose').model('Pet');


// const Book = mongoose.model('Book');


module.exports = {
  // get all of resource
  index(request, response) {
    console.log("getting pets");
    Pet.find({})
      .then(pets => response.json(pets))
      .catch(console.log)
  },

  // get a single resource
  show(request, response) {
    Pet.findById(request.params.pet_id)
      .then(pet => response.json(pet))
      .catch(console.log)
  },

  // create resource

  create(request, response) {
    console.log("request.body", request.body)
    Pet.create(request.body)
      .then(pet => response.json(pet))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message)

        response.status(402).json(errors);
      });
  },

  // update resource
  update(request, response) {
    console.log("request.params.pet_id", request.params.pet_id);
    console.log('request.body', request.body.name);
    Pet.findByIdAndUpdate(request.params.pet_id, request.body, {
        new: true
      })
      .then(pet => response.json(pet))
      .catch(console.log)
  },
  // update(request, response) {
  //   Pet.findById(request.params.pet_id, function (err, pet) {
  //       if (err)
  //         response.send(err);
  //       pet.name = request.body.name;
  //       pet.type = request.body.type;
  //       pet.description = request.body.description;
  //       pet.skill01 = request.body.skill01;
  //       pet.skill02 = request.body.skill02;
  //       pet.skill03 = request.body.skill03;
  //       pet.save();
  //       response.json({
  //         message: 'updated!'
  //       })

  //     }
  //   }



  // delete/remove resource
  destroy(request, response) {
    Pet.findByIdAndRemove(request.params.pet_id)
      .then(pet => response.json(pet))
      .catch(console.log)
  },


};
