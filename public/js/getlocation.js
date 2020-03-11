const request = require('request');

module.exports = {
  getLocation: (req, res) => {
    let lat = 35;
    let lon = 139;

    /*
      if (navigator.geolocation) {
        console.log(navigator.geolocation.getCurrentPosition());
      }
      else {
        console.log("Geolocation is not supported by this browser.");
      }
      */

      request('https://samples.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +  '&appid=b6907d289e10d714a6e88b30761fae22', function (error, response, body) {
          console.log(JSON.parse(body, null, 4));
      });
  }



}
