const mongoose = require('mongoose');
const {
  Schema
} = mongoose;


const Animal = new Schema({
  name: {
    type: String,
    required: true,
    min: 0
  },
  sex: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
  },
  nickname: {
    type: String,
    required: false
  }
});

var Mongoose = module.exports = mongoose.model('Animal', Animal);
// Get Animals (data)
module.exports.getAnimals = function (callback, limit) {
  Mongoose.find(callback).limit(limit);
}
// Get by ID Animals (data)
module.exports.getAnimalById = function (id, callback) {
  Mongoose.findById(id, callback);
}
// Create or Add Animals (data)
module.exports.createAnimal = function (animal, callback) {
  Mongoose.create(animal, callback);
}
// Update Animals (data) = find one by ID and update
module.exports.updateAnimal = function (id, animal, options, callback) {
  var query = {
    _id: id
  };
  var update = {
    name: animal.name,
    sex: animal.sex,
    age: animal.age,
    nickname: animal.nickname
  }
  Mongoose.findOneAndUpdate(query, update, options, callback);
}
// Delete Animals (data) = find one by ID and delete
module.exports.deleteAnimal = function (id, callback) {
  var query = {
    _id: id
  };
  Mongoose.remove(query, callback);
}
