const express = require('express');
const path = require('path');
const errorhandler = require('errorhandler')
const morgan = require('morgan');
const port = 3000;
const app = express();


//Länkar till modulen
const {getLocation} = require('./public/js/getlocation.js')

console.log("The server is running on port: " + port + "...")
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
  //res.send("Hello!");
  res.render(path.join(__dirname, '/index.ejs'),{titel:"HELLO I AM HERE!"});
});

app.listen(port);
