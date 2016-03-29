//grab the required packages

var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();
var grams

//configure the app
app.use(express.static(__dirname+'/public'));

app.set('view engine', 'ejs');

//configure ig app with client id
ig.use({
  access_token: '337483964.1677ed0.31bbb41ba6aa42e2ad016689e61c80c0' ,
  client_id: 'e30d3c4f83f44e429103afd6b95020ac',
  client_secret: '0d99c488fbc74d069a71e7fd72835f74'
});

//set the route
app.get('/', function(req, res){
  //use ig package to get popular photos
  ig.media_popular(function(err, medias, remaining, limit) {
    res.render('pages/index', { grams: medias });
  });

  //render the home page and pass in the popular images
  //res.render('pages/index');
});

app.listen(8080);
console.log('App is started!');
