const mongoose = require('mongoose');

//nao preciso criar um id, o mongo ja faz isso
const animalSchema = new mongoose.Schema({
    name: String,
    age: Number,
    type: String,
    race: String,
    owner: String,
    phone: Number
});
const Animals = mongoose.model('Animals',animalSchema);

module.exports = Animals;