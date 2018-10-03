const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const session = require('express-session');

app.use(session({secret: 'marcokey'}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.set('port', port);



require('./server/config/database.js');
require('./server/config/routes.js')(app);



app.listen(port, ()=> console.log(`Express server listening on port ${port}`));