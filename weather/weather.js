const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url:
     `https://api.darksky.net/forecast/2c1be8f6b02718176ad9390e1775271c/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    } else {
      callback('Unable to fetch weather.');
    }
  })
};

module.exports.getWeather = getWeather;
