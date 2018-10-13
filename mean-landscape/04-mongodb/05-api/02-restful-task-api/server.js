const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const path = require('path');
const modelsPath = path.resolve('server', 'models');
const Pet = require('./server/models/animal');
const mongoose = require('mongoose');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mongoose_dashboard', {
  useNewUrlParser: true
});
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.set('port', port);

app.get('/', function (request, response) {
  response.send('go to /api/mongoose');
});

app.get('/api/mongoose', function (request, response) {
  Pet.getAnimals(function (err, mongoo) {
    if (err) {
      throw err;
    }
    response.json(mongoo);
  });
});

app.post('/api/mongoose', function (request, response) {
  var animals = request.body;
  Pet.createAnimal(animals, function (err, mongoo) {
    if (err) {
      throw err;
    }
    response.json(mongoo);
  });
});

app.get('/api/mongoose/:id', function (request, response) {
  id = request.params.id
  Pet.getAnimalById(id, function (err, mongoo_id) {
    if (err) {
      throw err;
    }
    response.json(mongoo_id);
  });
});

app.put('/api/mongoose/:id', function (request, response) {
  var id = request.params.id;
  var animals = request.body;
  Pet.updateAnimal(id, animals, {}, function (err, mongoo) {
    if (err) {
      throw err;
    }
    response.json(mongoo);
  });
});

app.delete('/api/mongoose/:id', function (request, response) {
  var id = request.params.id;
  Pet.deleteAnimal(id, function (err, mongoo) {
    if (err) {
      throw err;
    }
    response.json(mongoo);
  });
});


app.listen(port, () => console.log(`Express server listening on por ${port}`));
