const express = require('express');
const routes = express.Router();
const AnimalsController = require('../controllers/animals.controller');

routes.get('/animals', AnimalsController.apiGetAllAnimals);

routes.post('/animals', AnimalsController.apiCreateAnimal);

routes.put('/animals/:_id', AnimalsController.apiUpdateAnimal);

routes.delete('/animals/:_id', AnimalsController.apiDeleteAnimal);

module.exports = routes;