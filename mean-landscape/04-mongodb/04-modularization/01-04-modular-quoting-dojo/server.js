const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const port = process.env.PORT || 8000;
app.set('port', port);


require('./server/config/database');
require('./server/config/routes')(app);


app.listen(port, ()=> console.log(`Express server listening on port ${port}`));