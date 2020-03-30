const request = require('request');

function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showTemperature);
  }
  else{
    console.log("Temperature Unavailable.");
  }
}

function showTemperature(position){
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
}

module.exports = {

getTemperature: (req, res) =>{
  getLocation();
  showTemperature(position);
  request('api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon' + lon + '&appid=2b51b9dd07fa82fae66de057bfac1138', function (error, response, body){
    console.log(JSON.parse(body, null, 4));
    const newBody = JSON.parse(body);
    let temp = newBody.main.temp;
    temp -= 273;
    document.getElementById("temperature").innerHTML = Math.round(temp);
    console.log("Temp: " + Math.round(temp) + " °C");
    })
  }
}

/*
  //getLocation: (req, res) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

      request('api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude +'&lon' + position.coords.longitude + '&appid=2b51b9dd07fa82fae66de057bfac1138', function (error, response, body){
      //request('https://samples.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +  '&appid=b6907d289e10d714a6e88b30761fae22', function (error, response, body) {
          console.log(JSON.parse(body, null, 4));
          const newBody = JSON.parse(body);
          let temp = newBody.main.temp;
          temp -= 273;
          document.getElementById("temperature") = Math.round(temp);
          console.log("Temp: " + Math.round(temp) + " °C");
      });
  }
//}



//This worked in index.ejs
/*
function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else{
    document.getElementById("temperature").innerHTML = "Temperature Unavailable";
  }
}

function showPosition(position){
  document.getElementById("temperature").innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
*/

//const {getLocation} = require('./public/js/getlocation.js')

//app.get('/getWeather', getLocation);

//localhost:3000/getWeather
