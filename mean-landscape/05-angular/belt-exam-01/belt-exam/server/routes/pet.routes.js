const petController = require('../controllers/pet.controller');
const router = require('express').Router();

//    /resource/:id   => after index.js it goes to /books/:id
// and /api/books/:id

module.exports = router
  .get('/', petController.index)
  .post('/', petController.create)
  .get('/:pet_id', petController.show)
  .put('/:pet_id', petController.update)
  .delete('/:pet_id', petController.destroy)
