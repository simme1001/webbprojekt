const express = require('express');
const path = require('path');
const errorhandler = require('errorhandler')
const morgan = require('morgan');
const port = 3000;
const app = express();

app.set('view engine', 'ejs');

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

//Länkar till modulen
//const {getTemperature} = require('./public/js/getlocation.js')

console.log("The server is running on port: " + port + "...")
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  //getLocation();
  //getTemperature();
  res.render('index');
});

app.get('/spel', function(req, res){
  //getLocation();
  res.render('spel');
});

app.get('/arbete', function(req, res){
  //getLocation();
  res.render(path.join(__dirname, '/arbete.ejs'));
});

app.listen(port);
