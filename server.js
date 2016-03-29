//grab the required packages

var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

//configure the app
app.use(express.static(__dirname+'/public'));

app.set('view engine', 'ejs');

//configure ig app with client id

//set the route
app.get('/', function(req, res){
  //use ig package to get popular photos

  //render the home page and pass in the popular images
  res.render('pages/index');
});

app.listen(8080);
console.log('App is started!');
