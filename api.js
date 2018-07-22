const request = require('request');
const geocode = require('./geocode/geocode.js');

request({
  url: 'https://api.darksky.net/forecast/c8c178b98804aec54f8552c030d8cdfd/80.045802,80.045802',
  json: true
},(error,response,body)=>{
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  }
  else {
    console.log('unable to fetch weather');
  }
});



// 13.051695
//  80.21047449999999
