const request = require('request');

request({
  url:
   'https://api.darksky.net/forecast/2c1be8f6b02718176ad9390e1775271c/33.9810337,-117.8897468',
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log (body.currently.temperature);
  } else {
    console.log('Unable to fether weather.');
  }
})
