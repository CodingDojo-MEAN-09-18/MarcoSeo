const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));

const server = app.listen(port, () => console.log(`listening on port ${port}`));
const io = require('socket.io')(server);
let count = 0;

app.get('/', function(request, response){
    response.render('index');
});


io.on('connection', socket => {
    console.log('incoming socket connection');
    socket.on('form_submitted', function(data){
        console.log('form is submitted');
        socket.emit('server_response', {response: data});
        let num = Math.floor(Math.random()*1000+1);
        socket.emit('random_number', {response: num});
    });
});
