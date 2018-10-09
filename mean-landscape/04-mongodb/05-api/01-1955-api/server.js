var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
const port = process.env.PORT || 8888;

app.use(bodyParser.json());

require('./server/config/database.js');
require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});