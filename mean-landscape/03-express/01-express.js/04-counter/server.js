var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');

const port = process.env.PORT || 8000;
var app = express();

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.set('port', port);
app.use(express.static(__dirname + "/static"));
var counter = 0;

app.get("/", function (req, res) {
	//console.log(res);
	res.redirect("/main");
})

app.get("/main", function(req, res){
	counter += 0;
	//console.log(counter);
	res.render("index", {counter: counter});
})

app.get("style.css", function(req, res){
	console.log("Do we get into this route?");
	res.render("/static/style.css");
})

app.post("/plustwo", function(req, res){
	counter += 2;
	res.redirect("/");
})

app.post("/plusone", function(req, res){
	counter += 1;
	res.redirect("/");
})

app.post("/reset", function(req, res){
	counter = 0;
	res.redirect("/");
})

app.listen(port, ()=> console.log(`Express server listening on port ${port}`));