const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'address to fetch weather',
      string: true
    }
  })
  .help()
  .alias('help' , 'h')
  .argv;

 console.log(argv);

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.Latitude,results.Longitude,(errorMessage,results)=>{
      if (errorMessage) {
        console.log(errorMessage);
      }else {
        console.log(JSON.stringify(results,undefined,2));
      }
    });
  }
 });

//API key for forecast.io is  c8c178b98804aec54f8552c030d8cdfd


//  var encodedAddress = encodeURIComponent(argv.address);
//
// request({
//   url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&YOURKEY=AIzaSyBzEndhGmqogVq53-pRda0Zz8AisFSIUdM`,
//   json: true
// },(error,response,body) =>{
//   if (error) {
//     console.log('unable to connect to server');
//   }
//   else if (body.status === 'ZERO_RESULTS') {
//     console.log('invalid address');
//   }
//   else if (body.status ==="ok") {
//   console.log(`Address: ${body.results[0].formatted_address}`);
//   console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
//   console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
//   }
//   else {
//     console.log('unexpected error');
//   }
// });
