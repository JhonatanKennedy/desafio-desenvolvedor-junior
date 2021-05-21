const express = require('express');
const mongoose = require('mongoose');
const routesAnimal = require('./routes/animal.routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost/petshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexão com bd bem sucedida'))
.catch((err) => console.log(`Erro: ${err}`));

app.use(cors());
app.use(express.json())
app.use(routesAnimal);


app.listen(3333);