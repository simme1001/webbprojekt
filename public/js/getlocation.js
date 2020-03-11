module.exports = {
  getLocation: (req, res) => {
    
      if (navigator.geolocation) {
        console.log(navigator.geolocation.getCurrentPosition());
      }
      else {
        console.log("Geolocation is not supported by this browser.");
      }
  }
}
