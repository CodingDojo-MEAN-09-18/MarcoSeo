const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const path = require('path');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.set('port', port);

// DATABASE
require('./server/config/database');
require('./server/config/routes')(app);


app.listen(port, ()=> console.log(`Express server listening on por ${port}`));