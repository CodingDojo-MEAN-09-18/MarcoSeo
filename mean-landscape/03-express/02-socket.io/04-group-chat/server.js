var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});


//routiung
app.get('/', function(req, res) {
 res.render("index");
})


// Sockets

var users = [];

var messages = [];

var is_user = function(user) {
  var users_count = users.length;

  for (var i = 0; i < users_count; i++) {
    if (user == users[i]) {
      return true;
    }
  }
  return false;
}



  var io = require("socket.io").listen(server)

  io.sockets.on("connection", function(socket){
    socket.on("page_load", function(data){
      if(is_user(data.user) === true) {
        socket.emit("existing_user", {error: "This user already exits"})
      } else {
        users.push(data.user);
        socket.emit("load_messages", {current_user: data.user, messages: messages})
      }
    })

    socket.on("new_message", function(data){
      messages.push({name: data.user, message: data.message})
      io.emit("post_new_message", {new_message: data.message, user: data.user})
    })
    

  })